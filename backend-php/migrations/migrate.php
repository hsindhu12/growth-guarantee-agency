<?php
require_once __DIR__ . '/../config/database.php';

echo "🚀 Running database migrations...\n";

try {
    $migrationSQL = file_get_contents(__DIR__ . '/001_initial_schema.sql');
    
    if ($migrationSQL === false) {
        throw new Exception('Could not read migration file');
    }
    
    // Split SQL into individual statements
    $statements = array_filter(
        array_map('trim', preg_split('/;[\r\n]+/', $migrationSQL)),
        function($stmt) { return !empty($stmt); }
    );
    
    foreach ($statements as $statement) {
        if (!empty(trim($statement))) {
            $db->execute($statement);
        }
    }
    
    echo "✅ Database migrations completed successfully\n";
    
} catch (Exception $e) {
    echo "❌ Migration failed: " . $e->getMessage() . "\n";
    exit(1);
}
?>