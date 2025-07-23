const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
require('dotenv').config();

const runMigrations = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    multipleStatements: true
  });

  try {
    console.log('🚀 Running database migrations...');
    
    const migrationFile = fs.readFileSync(
      path.join(__dirname, '001_initial_schema.sql'), 
      'utf8'
    );
    
    await connection.execute(migrationFile);
    console.log('✅ Database migrations completed successfully');
    
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  } finally {
    await connection.end();
  }
};

runMigrations();