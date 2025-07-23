const express = require('express');
const { body, validationResult } = require('express-validator');
const db = require('../config/database');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// Subscribe to newsletter
router.post('/subscribe', [
  body('email').isEmail().normalizeEmail()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, name } = req.body;

    // Check if already subscribed
    const [existing] = await db.execute(
      'SELECT id, status FROM newsletter_subscribers WHERE email = ?',
      [email]
    );

    if (existing.length > 0) {
      if (existing[0].status === 'active') {
        return res.status(400).json({ error: 'Email already subscribed' });
      } else {
        // Reactivate subscription
        await db.execute(
          'UPDATE newsletter_subscribers SET status = "active", subscribed_at = CURRENT_TIMESTAMP, unsubscribed_at = NULL WHERE email = ?',
          [email]
        );
        return res.json({ message: 'Subscription reactivated successfully' });
      }
    }

    await db.execute(
      'INSERT INTO newsletter_subscribers (email, name) VALUES (?, ?)',
      [email, name]
    );

    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Unsubscribe from newsletter
router.post('/unsubscribe', [
  body('email').isEmail().normalizeEmail()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;

    await db.execute(
      'UPDATE newsletter_subscribers SET status = "unsubscribed", unsubscribed_at = CURRENT_TIMESTAMP WHERE email = ?',
      [email]
    );

    res.json({ message: 'Unsubscribed successfully' });
  } catch (error) {
    console.error('Error unsubscribing from newsletter:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all subscribers (admin only)
router.get('/subscribers', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { status = 'active', limit = 100, offset = 0 } = req.query;

    const [subscribers] = await db.execute(
      'SELECT * FROM newsletter_subscribers WHERE status = ? ORDER BY subscribed_at DESC LIMIT ? OFFSET ?',
      [status, parseInt(limit), parseInt(offset)]
    );

    res.json(subscribers);
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;