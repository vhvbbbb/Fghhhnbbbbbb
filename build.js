const fs = require('fs');
const path = require('path');

console.log("⚙️  Starting the build process...");

// Create 'dist' directory if not exists
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
    console.log("📁 'dist' folder created.");
}

// Example: Copy main files
const filesToCopy = ['index.html', 'style.css', 'app.js'];
filesToCopy.forEach(file => {
    const src = path.join(__dirname, 'src', file);
    const dest = path.join(distDir, file);

    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`✅ Copied ${file} to 'dist'`);
    } else {
        console.log(`⚠️  Warning: ${file} not found in 'src'`);
    }
});

console.log("✅ Build process completed successfully!");
