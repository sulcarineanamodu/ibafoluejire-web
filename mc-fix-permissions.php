<?php
/**
 * MyContinental — Fix image permissions
 * Upload to public_html/, run via curl, then DELETE.
 * Usage: ?token=mc-fix-perms-2026
 */
$VALID_TOKEN = 'mc-fix-perms-2026';
if (($_GET['token'] ?? '') !== $VALID_TOKEN) {
    http_response_code(403); die('Unauthorized.');
}

// Use absolute path — no WordPress needed
$dir    = dirname(__FILE__) . '/wp-content/uploads/2025/07/';
$images = glob($dir . '*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG,WEBP}', GLOB_BRACE);

if ($images === false || count($images) === 0) {
    header('Content-Type: application/json');
    die(json_encode(['error' => 'No images found', 'dir' => $dir]));
}

$fixed  = 0;
$errors = [];

foreach ($images as $file) {
    if (chmod($file, 0644)) {
        $fixed++;
    } else {
        $errors[] = basename($file);
    }
}

header('Content-Type: application/json');
echo json_encode([
    'total'  => count($images),
    'fixed'  => $fixed,
    'errors' => count($errors),
], JSON_PRETTY_PRINT);
