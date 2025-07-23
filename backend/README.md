# ICONA Backend API

A Node.js/Express backend with MySQL database for the ICONA website.

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Environment Configuration
Copy `.env.example` to `.env` and configure your settings:

```bash
cp .env.example .env
```

Edit `.env` with your MySQL database credentials:
```
NODE_ENV=development
PORT=3001
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
npm run migrate
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

### 4. Start the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The API will be available at `http://localhost:3001`

## Hostinger Deployment

### For Hostinger VPS:

1. Upload the backend folder to your VPS
2. Install Node.js and npm on your VPS
3. Set up MySQL database in Hostinger control panel
4. Configure your .env file with Hostinger database credentials
5. Run `npm install` and `npm run migrate`
6. Use PM2 to keep the API running:
   ```bash
   npm install -g pm2
   pm2 start server.js --name "icona-api"
   pm2 startup
   pm2 save
   ```

### For Hostinger Shared Hosting:
Note: Most shared hosting plans don't support Node.js. You'll need a VPS or Cloud hosting plan.

## API Endpoints

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

- JWT authentication
- Password hashing with bcrypt
- Rate limiting
- CORS protection
- Input validation
- SQL injection prevention
- Helmet security headers

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