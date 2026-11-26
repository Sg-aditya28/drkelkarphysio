const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/drkelkarphysio' : '');

if (!fs.existsSync(outDir)) {
  console.log('out/ directory does not exist. Skipping post-processing.');
  process.exit(0);
}

// 1. Ensure .nojekyll exists
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
console.log('Verified out/.nojekyll');

// 2. Process HTML files to ensure all asset paths have basePath
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      if (basePath) {
        // Ensure images and css have basePath if not already prefixed
        content = content.replace(/(href|src)="\/images\//g, `$1="${basePath}/images/`);
        content = content.replace(/(href|src)="\/css\//g, `$1="${basePath}/css/`);
        content = content.replace(/(href|src)="\/favicon\.ico"/g, `$1="${basePath}/favicon.ico"`);
      }
      
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

processDirectory(outDir);
console.log('Static export paths processed successfully.');
