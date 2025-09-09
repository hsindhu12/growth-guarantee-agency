const bcrypt = require('bcryptjs');
const db = require('./config/database');

async function fixAdminPassword() {
  try {
    // Generate proper bcrypt hash for 'admin123'
    const password = 'admin123';
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    console.log('🔐 Generated new password hash');
    
    // Update admin user password
    const [result] = await db.execute(
      'UPDATE admin_users SET password_hash = ? WHERE email = ?',
      [hashedPassword, 'admin@icona.com']
    );
    
    console.log('✅ Password updated in database');
    
    // Verify the admin user exists
    const [users] = await db.execute(
      'SELECT id, email, name, role FROM admin_users WHERE email = ?',
      ['admin@icona.com']
    );
    
    if (users.length > 0) {
      console.log('👤 Admin user verified:', users[0]);
      console.log('\n🎯 Login credentials:');
      console.log('Email: admin@icona.com');
      console.log('Password: admin123');
      console.log('Login URL: http://localhost:5173/auth');
    } else {
      console.log('❌ Admin user not found in database');
    }
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error fixing admin password:', error);
    process.exit(1);
  }
}

fixAdminPassword();