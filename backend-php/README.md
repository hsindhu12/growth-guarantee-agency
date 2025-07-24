# ICONA PHP Backend API

A PHP backend with MySQL database for the ICONA website - perfect for Hostinger hosting.

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend-php
composer install
```

### 2. Environment Configuration
Copy `.env.example` to `.env` and configure your settings:

```bash
cp .env.example .env
```

Edit `.env` with your MySQL database credentials:
```
FRONTEND_URL=http://localhost:5173

# MySQL Database (Configure for Hostinger)
DB_HOST=your_hostinger_mysql_host
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=icona_db

# JWT Secret (Generate a strong secret)
JWT_SECRET=your_super_secret_jwt_key_here

# Upload settings
MAX_FILE_SIZE=10485760
UPLOAD_PATH=./uploads
```

### 3. Database Setup
Run the migration to create all necessary tables:

```bash
composer run migrate
```

This will create:
- admin_users table with default admin user (admin@icona.com / admin123)
- blog_posts table
- success_stories table
- contacts table
- newsletter_subscribers table
- service_pages table
- site_settings table
- media_library table

### 4. Upload to Hostinger

#### For Hostinger Shared Hosting:
1. Upload all files in `backend-php` folder to your domain's public_html directory (or a subdirectory like `api/`)
2. Set up MySQL database in Hostinger control panel
3. Update the `.env` file with your Hostinger database credentials
4. Run the migration script via browser: `https://yourdomain.com/migrations/migrate.php`

#### File Structure on Hostinger:
```
public_html/
├── api/                 (or root directory)
│   ├── index.php
│   ├── .htaccess
│   ├── .env
│   ├── config/
│   ├── routes/
│   ├── migrations/
│   └── vendor/
```

### 5. Update Frontend API URL

Update `src/lib/api.ts` in your frontend:

```typescript
// For production (replace with your domain)
const API_BASE_URL = 'https://yourdomain.com/api';
```

## API Endpoints

All endpoints are the same as the Node.js version:

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/verify` - Verify token
- `POST /api/auth/logout` - Logout

### Blog Posts
- `GET /api/blog` - Get published blog posts
- `GET /api/blog/:slug` - Get single blog post
- `POST /api/blog` - Create blog post (admin)
- `PUT /api/blog/:id` - Update blog post (admin)
- `DELETE /api/blog/:id` - Delete blog post (admin)

### Success Stories
- `GET /api/success-stories` - Get published success stories
- `GET /api/success-stories/:id` - Get single success story
- `POST /api/success-stories` - Create success story (admin)
- `PUT /api/success-stories/:id` - Update success story (admin)
- `DELETE /api/success-stories/:id` - Delete success story (admin)

### Contact Forms
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)
- `PUT /api/contact/:id/status` - Update contact status (admin)

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `POST /api/newsletter/unsubscribe` - Unsubscribe from newsletter
- `GET /api/newsletter/subscribers` - Get subscribers (admin)

### Services
- `GET /api/services` - Get all service pages
- `GET /api/services/:serviceType` - Get single service page
- `POST /api/services` - Create service page (admin)
- `PUT /api/services/:id` - Update service page (admin)

### Admin Dashboard
- `GET /api/admin/dashboard` - Get dashboard statistics
- `GET /api/admin/settings` - Get site settings
- `PUT /api/admin/settings/:key` - Update site setting

## Default Admin Account

Email: `admin@icona.com`
Password: `admin123`

**Important**: Change the default password after first login!

## Security Features

- JWT authentication with Firebase JWT library
- Password hashing with PHP's password_hash()
- Input validation and sanitization
- CORS protection
- SQL injection prevention with prepared statements
- .htaccess security headers
- Environment variable protection

## Hostinger Deployment Tips

1. **Database Configuration**: Use Hostinger's MySQL database management in cPanel
2. **File Permissions**: Ensure upload directories have write permissions (755)
3. **PHP Version**: Use PHP 7.4+ for best compatibility
4. **Error Logs**: Check cPanel error logs if issues occur
5. **SSL Certificate**: Enable SSL in Hostinger for HTTPS

## Database Schema

The MySQL database includes these main tables:
- `admin_users` - Admin user accounts
- `blog_posts` - Blog content management
- `success_stories` - Client success stories
- `contacts` - Contact form submissions
- `newsletter_subscribers` - Email newsletter subscriptions
- `service_pages` - Dynamic service page content
- `site_settings` - Configurable site settings
- `media_library` - File upload management

All tables include proper indexes and relationships for optimal performance.

## Testing

Access your API health check: `https://yourdomain.com/api/health`

If successful, you should see:
```json
{"status":"OK","timestamp":"2024-01-01T12:00:00+00:00"}
```