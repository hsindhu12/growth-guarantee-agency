# Frontend Setup Instructions

To complete the migration from Supabase to your own MySQL backend, you need to update the frontend configuration.

## Required Changes

### 1. Update API Base URL

In `src/lib/api.ts`, change the API_BASE_URL to match your deployed backend:

```typescript
// For local development
const API_BASE_URL = 'http://localhost:3001/api';

// For production (replace with your Hostinger server URL)
const API_BASE_URL = 'https://your-domain.com/api';
```

### 2. Remove Supabase Dependencies

You can now remove these dependencies from package.json:
```bash
npm uninstall @supabase/supabase-js
```

### 3. Delete Supabase Files

You can delete these files as they're no longer needed:
- `src/integrations/supabase/`
- `supabase/` folder

### 4. Update Environment Configuration

The frontend no longer needs environment variables since it connects directly to your API.

## Deployment Steps

### 1. Build the Frontend
```bash
npm run build
```

### 2. Deploy to Hostinger

#### Option A: Manual Upload
1. Upload the `dist` folder contents to your Hostinger public_html directory
2. Ensure your backend API is running and accessible

#### Option B: Git Deployment (if available)
1. Push your code to a Git repository
2. Use Hostinger's Git deployment feature
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### 3. Configure Domain/Subdomain

Set up your domain to point to the uploaded files in Hostinger control panel.

## Testing the Migration

1. Ensure your backend API is running
2. Test these key features:
   - Contact form submission
   - Newsletter subscription
   - Blog post display
   - Success stories display
   - Admin login (admin@icona.com / admin123)

## Admin Panel Access

Access your admin panel at: `https://your-domain.com/admin`

Default credentials:
- Email: admin@icona.com
- Password: admin123

**Important**: Change the default password after first login!

## Troubleshooting

### CORS Issues
If you encounter CORS errors, ensure your backend's CORS configuration includes your frontend domain:

```javascript
// In backend/server.js
app.use(cors({
  origin: 'https://your-domain.com', // Add your frontend URL
  credentials: true
}));
```

### API Connection Issues
- Verify your backend is running and accessible
- Check the API_BASE_URL in `src/lib/api.ts`
- Ensure your Hostinger MySQL database is properly configured

### File Upload Issues
- Ensure the `uploads` directory exists and has proper permissions
- Configure file size limits in your hosting environment

This completes your migration from Supabase to a self-hosted solution!