const bcrypt = require('bcryptjs');
const mysql = require('mysql2/promise');
require('dotenv').config({ path: './backend/.env' });

async function fixAdminPassword() {
  try {
    // Generate proper bcrypt hash for 'admin123'
    const password = 'admin123';
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    console.log('Generated password hash:', hashedPassword);
    
    // Connect to database
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });
    
    // Update admin user password
    const [result] = await connection.execute(
      'UPDATE admin_users SET password_hash = ? WHERE email = ?',
      [hashedPassword, 'admin@icona.com']
    );
    
    console.log('Password updated successfully:', result);
    
    // Verify the admin user exists
    const [users] = await connection.execute(
      'SELECT id, email, name, role FROM admin_users WHERE email = ?',
      ['admin@icona.com']
    );
    
    console.log('Admin user found:', users[0]);
    
    await connection.end();
    console.log('✅ Admin password fixed successfully!');
    console.log('Use these credentials to login:');
    console.log('Email: admin@icona.com');
    console.log('Password: admin123');
    console.log('Frontend URL: http://localhost:5173/auth');
    
  } catch (error) {
    console.error('❌ Error fixing admin password:', error);
  }
}

fixAdminPassword();