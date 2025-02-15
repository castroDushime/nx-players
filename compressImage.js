const sharp = require('sharp');

sharp('logo.png')
    .resize(800) // Resize to width of 800px, maintaining aspect ratio
    .toFormat('png', { quality: 80 }) // Compress with quality setting
    .toFile('logo-compressed.png', (err, info) => {
        if (err) {
            console.error('Error compressing image:', err);
        } else {
            console.log('Image compressed successfully:', info);
        }
    });