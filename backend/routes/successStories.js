const express = require('express');
const { body, validationResult } = require('express-validator');
const db = require('../config/database');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// Get all published success stories
router.get('/', async (req, res) => {
  try {
    const { featured, limit = 10, offset = 0 } = req.query;
    
    let query = 'SELECT * FROM success_stories WHERE published = TRUE';
    const params = [];

    if (featured === 'true') {
      query += ' AND featured = TRUE';
    }

    query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
    params.push(parseInt(limit), parseInt(offset));

    const [stories] = await db.execute(query, params);
    res.json(stories);
  } catch (error) {
    console.error('Error fetching success stories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get single success story
router.get('/:id', async (req, res) => {
  try {
    const [stories] = await db.execute(
      'SELECT * FROM success_stories WHERE id = ? AND published = TRUE',
      [req.params.id]
    );

    if (stories.length === 0) {
      return res.status(404).json({ error: 'Success story not found' });
    }

    res.json(stories[0]);
  } catch (error) {
    console.error('Error fetching success story:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create success story (admin only)
router.post('/', authenticateToken, requireAdmin, [
  body('client_name').trim().isLength({ min: 1 }),
  body('challenge').trim().isLength({ min: 1 }),
  body('solution').trim().isLength({ min: 1 }),
  body('results').trim().isLength({ min: 1 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      client_name, industry, challenge, solution, results,
      metrics, image_url, featured = false, published = false
    } = req.body;

    const [result] = await db.execute(
      `INSERT INTO success_stories (
        client_name, industry, challenge, solution, results,
        metrics, image_url, featured, published
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        client_name, industry, challenge, solution, results,
        JSON.stringify(metrics), image_url, featured, published
      ]
    );

    res.status(201).json({ id: result.insertId });
  } catch (error) {
    console.error('Error creating success story:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update success story (admin only)
router.put('/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (updates.metrics && typeof updates.metrics === 'object') {
      updates.metrics = JSON.stringify(updates.metrics);
    }

    const setClause = Object.keys(updates).map(key => `${key} = ?`).join(', ');
    const values = Object.values(updates);
    values.push(id);

    await db.execute(
      `UPDATE success_stories SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
      values
    );

    res.json({ message: 'Success story updated successfully' });
  } catch (error) {
    console.error('Error updating success story:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete success story (admin only)
router.delete('/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    await db.execute('DELETE FROM success_stories WHERE id = ?', [req.params.id]);
    res.json({ message: 'Success story deleted successfully' });
  } catch (error) {
    console.error('Error deleting success story:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;