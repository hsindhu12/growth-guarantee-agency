const express = require('express');
const { body, validationResult, param } = require('express-validator');
const db = require('../config/database');
const auth = require('../middleware/auth');
const slugify = require('slugify');

const router = express.Router();

// Get all pages
router.get('/', async (req, res) => {
  try {
    const { status = 'published', limit = 50, offset = 0 } = req.query;
    
    let query = 'SELECT id, title, slug, content, meta_title, meta_description, featured_image, status, template, created_at, updated_at FROM pages';
    let params = [];
    
    if (status !== 'all') {
      query += ' WHERE status = ?';
      params.push(status);
    }
    
    query += ' ORDER BY updated_at DESC LIMIT ? OFFSET ?';
    params.push(parseInt(limit), parseInt(offset));
    
    const [pages] = await db.execute(query, params);
    
    res.json({
      pages,
      total: pages.length,
      limit: parseInt(limit),
      offset: parseInt(offset)
    });
  } catch (error) {
    console.error('Error fetching pages:', error);
    res.status(500).json({ error: 'Failed to fetch pages' });
  }
});

// Get page by slug
router.get('/slug/:slug', param('slug').isSlug(), async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { slug } = req.params;
    const [pages] = await db.execute(
      'SELECT * FROM pages WHERE slug = ? AND status = "published"',
      [slug]
    );

    if (pages.length === 0) {
      return res.status(404).json({ error: 'Page not found' });
    }

    res.json(pages[0]);
  } catch (error) {
    console.error('Error fetching page:', error);
    res.status(500).json({ error: 'Failed to fetch page' });
  }
});

// Get page by ID (admin only)
router.get('/:id', auth, param('id').isInt(), async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const [pages] = await db.execute('SELECT * FROM pages WHERE id = ?', [id]);

    if (pages.length === 0) {
      return res.status(404).json({ error: 'Page not found' });
    }

    res.json(pages[0]);
  } catch (error) {
    console.error('Error fetching page:', error);
    res.status(500).json({ error: 'Failed to fetch page' });
  }
});

// Create new page (admin only)
router.post('/', auth, [
  body('title').notEmpty().trim().escape(),
  body('content').optional().isJSON(),
  body('meta_title').optional().trim().escape(),
  body('meta_description').optional().trim().escape(),
  body('featured_image').optional().isURL(),
  body('status').optional().isIn(['draft', 'published', 'archived']),
  body('template').optional().trim().escape()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      title,
      content = '{"elements":[]}',
      meta_title,
      meta_description,
      featured_image,
      status = 'draft',
      template = 'default'
    } = req.body;

    // Generate unique slug
    let baseSlug = slugify(title, { lower: true, strict: true });
    let slug = baseSlug;
    let counter = 1;

    while (true) {
      const [existing] = await db.execute('SELECT id FROM pages WHERE slug = ?', [slug]);
      if (existing.length === 0) break;
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    const [result] = await db.execute(
      `INSERT INTO pages (title, slug, content, meta_title, meta_description, featured_image, status, template, author_id)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, slug, content, meta_title, meta_description, featured_image, status, template, req.user.id]
    );

    const [newPage] = await db.execute('SELECT * FROM pages WHERE id = ?', [result.insertId]);
    res.status(201).json(newPage[0]);
  } catch (error) {
    console.error('Error creating page:', error);
    res.status(500).json({ error: 'Failed to create page' });
  }
});

// Update page (admin only)
router.put('/:id', auth, [
  param('id').isInt(),
  body('title').optional().notEmpty().trim().escape(),
  body('content').optional().isJSON(),
  body('meta_title').optional().trim().escape(),
  body('meta_description').optional().trim().escape(),
  body('featured_image').optional().isURL(),
  body('status').optional().isIn(['draft', 'published', 'archived']),
  body('template').optional().trim().escape()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const updates = req.body;

    // Check if page exists
    const [existing] = await db.execute('SELECT id FROM pages WHERE id = ?', [id]);
    if (existing.length === 0) {
      return res.status(404).json({ error: 'Page not found' });
    }

    // Handle slug update if title changed
    if (updates.title) {
      let baseSlug = slugify(updates.title, { lower: true, strict: true });
      let slug = baseSlug;
      let counter = 1;

      while (true) {
        const [existing] = await db.execute('SELECT id FROM pages WHERE slug = ? AND id != ?', [slug, id]);
        if (existing.length === 0) break;
        slug = `${baseSlug}-${counter}`;
        counter++;
      }
      updates.slug = slug;
    }

    const fields = Object.keys(updates);
    const values = Object.values(updates);
    const setClause = fields.map(field => `${field} = ?`).join(', ');

    await db.execute(
      `UPDATE pages SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
      [...values, id]
    );

    const [updatedPage] = await db.execute('SELECT * FROM pages WHERE id = ?', [id]);
    res.json(updatedPage[0]);
  } catch (error) {
    console.error('Error updating page:', error);
    res.status(500).json({ error: 'Failed to update page' });
  }
});

// Delete page (admin only)
router.delete('/:id', auth, param('id').isInt(), async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    const [existing] = await db.execute('SELECT id FROM pages WHERE id = ?', [id]);
    if (existing.length === 0) {
      return res.status(404).json({ error: 'Page not found' });
    }

    await db.execute('DELETE FROM pages WHERE id = ?', [id]);
    res.json({ message: 'Page deleted successfully' });
  } catch (error) {
    console.error('Error deleting page:', error);
    res.status(500).json({ error: 'Failed to delete page' });
  }
});

module.exports = router;