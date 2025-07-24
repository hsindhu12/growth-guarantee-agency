<?php
require_once __DIR__ . '/../config/database.php';

echo "🚀 Loading sample data...\n";

try {
    $sampleDataSQL = file_get_contents(__DIR__ . '/002_sample_data.sql');
    
    if ($sampleDataSQL === false) {
        throw new Exception('Could not read sample data file');
    }
    
    // Split SQL into individual statements
    $statements = array_filter(
        array_map('trim', preg_split('/;[\r\n]+/', $sampleDataSQL)),
        function($stmt) { return !empty($stmt) && !preg_match('/^--/', $stmt); }
    );
    
    foreach ($statements as $statement) {
        if (!empty(trim($statement))) {
            $db->execute($statement);
        }
    }
    
    echo "✅ Sample data loaded successfully\n";
    echo "📊 Created:\n";
    echo "   - 3 blog posts\n";
    echo "   - 3 success stories\n";
    echo "   - 3 service pages\n";
    echo "   - 5 newsletter subscribers\n";
    echo "   - 4 contact form submissions\n";
    echo "   - Updated site settings\n";
    
} catch (Exception $e) {
    echo "❌ Sample data loading failed: " . $e->getMessage() . "\n";
    exit(1);
}
?>