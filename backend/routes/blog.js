const express = require('express');
const { body, validationResult } = require('express-validator');
const slugify = require('slugify');
const db = require('../config/database');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// Get all published blog posts
router.get('/', async (req, res) => {
  try {
    const { featured, category, limit = 10, offset = 0 } = req.query;
    
    let query = 'SELECT * FROM blog_posts WHERE published = TRUE';
    const params = [];

    if (featured === 'true') {
      query += ' AND featured = TRUE';
    }

    if (category) {
      query += ' AND category = ?';
      params.push(category);
    }

    query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
    params.push(parseInt(limit), parseInt(offset));

    const [posts] = await db.execute(query, params);
    res.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get single blog post by slug
router.get('/:slug', async (req, res) => {
  try {
    const [posts] = await db.execute(
      'SELECT * FROM blog_posts WHERE slug = ? AND published = TRUE',
      [req.params.slug]
    );

    if (posts.length === 0) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    res.json(posts[0]);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create blog post (admin only)
router.post('/', authenticateToken, requireAdmin, [
  body('title').trim().isLength({ min: 1 }),
  body('content').trim().isLength({ min: 1 }),
  body('author_name').trim().isLength({ min: 1 }),
  body('category').trim().isLength({ min: 1 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      title, excerpt, content, featured_image_url, author_name,
      category, tags, published = false, featured = false,
      meta_title, meta_description
    } = req.body;

    const slug = slugify(title, { lower: true, strict: true });

    // Check if slug already exists
    const [existing] = await db.execute(
      'SELECT id FROM blog_posts WHERE slug = ?',
      [slug]
    );

    if (existing.length > 0) {
      return res.status(400).json({ error: 'A post with this title already exists' });
    }

    const [result] = await db.execute(
      `INSERT INTO blog_posts (
        title, slug, excerpt, content, featured_image_url, author_name,
        category, tags, published, featured, meta_title, meta_description
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title, slug, excerpt, content, featured_image_url, author_name,
        category, JSON.stringify(tags), published, featured, meta_title, meta_description
      ]
    );

    res.status(201).json({ id: result.insertId, slug });
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update blog post (admin only)
router.put('/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    if (updates.title) {
      updates.slug = slugify(updates.title, { lower: true, strict: true });
    }

    if (updates.tags && Array.isArray(updates.tags)) {
      updates.tags = JSON.stringify(updates.tags);
    }

    const setClause = Object.keys(updates).map(key => `${key} = ?`).join(', ');
    const values = Object.values(updates);
    values.push(id);

    await db.execute(
      `UPDATE blog_posts SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
      values
    );

    res.json({ message: 'Blog post updated successfully' });
  } catch (error) {
    console.error('Error updating blog post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete blog post (admin only)
router.delete('/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    await db.execute('DELETE FROM blog_posts WHERE id = ?', [req.params.id]);
    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;