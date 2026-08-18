const fs = require('fs');
const path = require('path');

const candidates = [
  path.join(__dirname, 'dist', 'main.js'),
  path.join(__dirname, 'dist', 'src', 'main.js'),
  path.join(__dirname, 'dist', 'main'),
  path.join(__dirname, 'dist', 'src', 'main'),
];

let entry = candidates.find((p) => fs.existsSync(p));

if (!entry) {
  const distPath = path.join(__dirname, 'dist');
  console.error('Dist directory path:', distPath);
  if (fs.existsSync(distPath)) {
    console.error('Files inside dist:', fs.readdirSync(distPath));
    const srcPath = path.join(distPath, 'src');
    if (fs.existsSync(srcPath)) {
      console.error('Files inside dist/src:', fs.readdirSync(srcPath));
    }
  } else {
    console.error('dist directory does not exist! Running fallback build...');
    try {
      require('child_process').execSync('npm run build', { stdio: 'inherit' });
      entry = candidates.find((p) => fs.existsSync(p));
    } catch (e) {
      console.error('Build execution failed:', e);
    }
  }
}

if (!entry) {
  console.error('FATAL: Could not find compiled entry point (dist/main.js or dist/src/main.js)');
  process.exit(1);
}

console.log('🚀 Starting FlipGyan NestJS server from:', entry);
require(entry);
