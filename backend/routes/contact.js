const express = require('express');
const { body, validationResult } = require('express-validator');
const db = require('../config/database');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// Submit contact form
router.post('/', [
  body('name').trim().isLength({ min: 1 }),
  body('email').isEmail().normalizeEmail(),
  body('message').trim().isLength({ min: 1 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, company, message, service_interest } = req.body;

    await db.execute(
      `INSERT INTO contacts (name, email, phone, company, message, service_interest)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [name, email, phone, company, message, service_interest]
    );

    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all contacts (admin only)
router.get('/', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { status, limit = 50, offset = 0 } = req.query;
    
    let query = 'SELECT * FROM contacts';
    const params = [];

    if (status) {
      query += ' WHERE status = ?';
      params.push(status);
    }

    query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
    params.push(parseInt(limit), parseInt(offset));

    const [contacts] = await db.execute(query, params);
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update contact status (admin only)
router.put('/:id/status', authenticateToken, requireAdmin, [
  body('status').isIn(['new', 'contacted', 'qualified', 'closed'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { status } = req.body;

    await db.execute(
      'UPDATE contacts SET status = ? WHERE id = ?',
      [status, id]
    );

    res.json({ message: 'Contact status updated successfully' });
  } catch (error) {
    console.error('Error updating contact status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete contact (admin only)
router.delete('/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    await db.execute('DELETE FROM contacts WHERE id = ?', [req.params.id]);
    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;