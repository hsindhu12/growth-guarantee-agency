const express = require('express');
const { body, validationResult } = require('express-validator');
const db = require('../config/database');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// Get all service pages
router.get('/', async (req, res) => {
  try {
    const [services] = await db.execute(
      'SELECT * FROM service_pages WHERE published = TRUE ORDER BY created_at DESC'
    );
    res.json(services);
  } catch (error) {
    console.error('Error fetching service pages:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get single service page
router.get('/:serviceType', async (req, res) => {
  try {
    const [services] = await db.execute(
      'SELECT * FROM service_pages WHERE service_type = ? AND published = TRUE',
      [req.params.serviceType]
    );

    if (services.length === 0) {
      return res.status(404).json({ error: 'Service page not found' });
    }

    res.json(services[0]);
  } catch (error) {
    console.error('Error fetching service page:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create service page (admin only)
router.post('/', authenticateToken, requireAdmin, [
  body('service_type').trim().isLength({ min: 1 }),
  body('title').trim().isLength({ min: 1 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      service_type, title, subtitle, hero_content, features,
      pricing, testimonials, faq, meta_title, meta_description, published = true
    } = req.body;

    const [result] = await db.execute(
      `INSERT INTO service_pages (
        service_type, title, subtitle, hero_content, features,
        pricing, testimonials, faq, meta_title, meta_description, published
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        service_type, title, subtitle,
        JSON.stringify(hero_content), JSON.stringify(features),
        JSON.stringify(pricing), JSON.stringify(testimonials),
        JSON.stringify(faq), meta_title, meta_description, published
      ]
    );

    res.status(201).json({ id: result.insertId });
  } catch (error) {
    console.error('Error creating service page:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update service page (admin only)
router.put('/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Convert JSON fields
    const jsonFields = ['hero_content', 'features', 'pricing', 'testimonials', 'faq'];
    jsonFields.forEach(field => {
      if (updates[field] && typeof updates[field] === 'object') {
        updates[field] = JSON.stringify(updates[field]);
      }
    });

    const setClause = Object.keys(updates).map(key => `${key} = ?`).join(', ');
    const values = Object.values(updates);
    values.push(id);

    await db.execute(
      `UPDATE service_pages SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
      values
    );

    res.json({ message: 'Service page updated successfully' });
  } catch (error) {
    console.error('Error updating service page:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete service page (admin only)
router.delete('/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    await db.execute('DELETE FROM service_pages WHERE id = ?', [req.params.id]);
    res.json({ message: 'Service page deleted successfully' });
  } catch (error) {
    console.error('Error deleting service page:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;