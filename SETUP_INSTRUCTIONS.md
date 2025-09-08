# ICONA Digital Marketing Agency - Setup Instructions

## Prerequisites
- Node.js (v16 or higher)
- MySQL Server (v8.0 or higher)
- npm or yarn package manager

## Backend Setup

### 1. Database Setup
```bash
# Create MySQL database
mysql -u root -p
```

```sql
-- Import the database dump
SOURCE database_dump.sql;
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Configure Environment Variables
The backend already has a `.env` file configured. Update these values if needed:

```bash
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=icona_db

# Security
JWT_SECRET=your_jwt_secret_key_here_make_it_strong_and_random

# Server Configuration
PORT=3001
FRONTEND_URL=http://localhost:5173
```

### 4. Run Database Migrations
```bash
# Run the migration script
npm run migrate
```

### 5. Start the Backend Server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

The backend server will run on `http://localhost:3001`

## Frontend Setup

### 1. Install Frontend Dependencies
```bash
# From the project root
npm install
```

### 2. Start the Frontend Development Server
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## Default Admin Login
- **Email**: `admin@icona.com`
- **Password**: `admin123`

⚠️ **Important**: Change the default admin password after first login!

## API Endpoints
The backend provides these main endpoints:

- `POST /api/auth/login` - Admin login
- `GET /api/auth/verify` - Verify token
- `GET /api/blog` - Get blog posts
- `GET /api/success-stories` - Get success stories
- `POST /api/contact` - Submit contact form
- `POST /api/newsletter` - Newsletter subscription
- `GET /api/admin/dashboard` - Admin dashboard (requires auth)

## Troubleshooting

### "Failed to fetch" Error
This usually means the backend server isn't running. Make sure:
1. MySQL server is running
2. Database is created and migrated
3. Backend server is started on port 3001
4. No firewall blocking the connection

### Database Connection Issues
1. Verify MySQL credentials in `.env`
2. Ensure MySQL server is running
3. Check if the database `icona_db` exists
4. Verify user permissions for the database

### Login Issues
1. Ensure the admin user exists in the database
2. Check if JWT_SECRET is set in `.env`
3. Verify the password hash matches (use the provided admin123)

## Development Workflow
1. Start MySQL server
2. Run `npm run dev` in the backend directory
3. Run `npm run dev` in the frontend directory (project root)
4. Access the application at `http://localhost:5173`
5. Admin panel at `http://localhost:5173/auth`

## Production Deployment
For production deployment:
1. Set up MySQL database on your server
2. Configure environment variables for production
3. Use PM2 or similar process manager for the Node.js backend
4. Build and serve the frontend using a web server like Nginx
5. Set up SSL certificates
6. Configure proper firewall and security settings