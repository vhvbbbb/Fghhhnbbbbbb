const fs = require('fs');
const path = require('path');

console.log("⚙️  Starting the build process...");

// Create 'dist' directory if not exists
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
    console.log("📁 'dist' folder created.");
}

// Create 'src' directory if not exists
const srcDir = path.join(__dirname, 'src');
if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir);
    console.log("📁 'src' folder was missing! Created 'src' folder automatically.");

    // Create empty required files
    fs.writeFileSync(path.join(srcDir, 'index.html'), '<!-- index.html file -->');
    fs.writeFileSync(path.join(srcDir, 'style.css'), '/* style.css file */');
    fs.writeFileSync(path.join(srcDir, 'app.js'), '// app.js file');
    console.log("✅ Default files (index.html, style.css, app.js) created in 'src' folder.");
}

// Copy main files from 'src' to 'dist'
const filesToCopy = ['index.html', 'style.css', 'app.js'];
filesToCopy.forEach(file => {
    const src = path.join(srcDir, file);
    const dest = path.join(distDir, file);

    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`✅ Copied ${file} to 'dist'`);
    } else {
        console.log(`⚠️  Warning: ${file} not found in 'src'`);
    }
});

console.log("✅ Build process completed successfully!");
