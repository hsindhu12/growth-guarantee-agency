const express = require('express');
const { body, validationResult } = require('express-validator');
const db = require('../config/database');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// Get dashboard stats
router.get('/dashboard', authenticateToken, requireAdmin, async (req, res) => {
  try {
    // Get counts for dashboard
    const [contactsCount] = await db.execute('SELECT COUNT(*) as count FROM contacts');
    const [subscribersCount] = await db.execute('SELECT COUNT(*) as count FROM newsletter_subscribers WHERE status = "active"');
    const [postsCount] = await db.execute('SELECT COUNT(*) as count FROM blog_posts WHERE published = TRUE');
    const [storiesCount] = await db.execute('SELECT COUNT(*) as count FROM success_stories WHERE published = TRUE');

    // Get recent contacts
    const [recentContacts] = await db.execute(
      'SELECT * FROM contacts ORDER BY created_at DESC LIMIT 5'
    );

    // Get recent subscribers
    const [recentSubscribers] = await db.execute(
      'SELECT * FROM newsletter_subscribers WHERE status = "active" ORDER BY subscribed_at DESC LIMIT 5'
    );

    res.json({
      stats: {
        contacts: contactsCount[0].count,
        subscribers: subscribersCount[0].count,
        blogPosts: postsCount[0].count,
        successStories: storiesCount[0].count
      },
      recentContacts,
      recentSubscribers
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get site settings
router.get('/settings', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const [settings] = await db.execute('SELECT * FROM site_settings ORDER BY setting_key');
    res.json(settings);
  } catch (error) {
    console.error('Error fetching site settings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update site setting
router.put('/settings/:key', authenticateToken, requireAdmin, [
  body('value').exists()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { key } = req.params;
    const { value } = req.body;

    await db.execute(
      'UPDATE site_settings SET setting_value = ?, updated_at = CURRENT_TIMESTAMP, updated_by = ? WHERE setting_key = ?',
      [JSON.stringify(value), req.user.id, key]
    );

    res.json({ message: 'Setting updated successfully' });
  } catch (error) {
    console.error('Error updating site setting:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all blog posts for admin
router.get('/blog-posts', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { limit = 20, offset = 0 } = req.query;
    
    const [posts] = await db.execute(
      'SELECT * FROM blog_posts ORDER BY created_at DESC LIMIT ? OFFSET ?',
      [parseInt(limit), parseInt(offset)]
    );

    res.json(posts);
  } catch (error) {
    console.error('Error fetching admin blog posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all success stories for admin
router.get('/success-stories', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { limit = 20, offset = 0 } = req.query;
    
    const [stories] = await db.execute(
      'SELECT * FROM success_stories ORDER BY created_at DESC LIMIT ? OFFSET ?',
      [parseInt(limit), parseInt(offset)]
    );

    res.json(stories);
  } catch (error) {
    console.error('Error fetching admin success stories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;