const fs = require('fs');
const path = require('path');

console.log("⚙️  Starting the build process...");

// Correct path for 'src' folder
const srcDir = path.join(__dirname, 'src');
const distDir = path.join(__dirname, 'dist');

// Create 'dist' directory if not exists
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
    console.log("📁 'dist' folder created.");
}

// Ensure 'src' directory exists
if (!fs.existsSync(srcDir)) {
    console.error("❌ Error: 'src' folder not found! Please create it and add required files.");
    process.exit(1);  // Stop execution if 'src' is missing
}

// Files to copy
const filesToCopy = ['index.html', 'style.css', 'app.js'];

filesToCopy.forEach(file => {
    const src = path.join(srcDir, file);
    const dest = path.join(distDir, file);

    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`✅ Copied ${file} to 'dist'`);
    } else {
        console.warn(`⚠️ Warning: ${file} not found in 'src'`);
    }
});

console.log("✅ Build process completed successfully!");
