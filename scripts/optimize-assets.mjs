import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import sharp from 'sharp';
import ffmpegPath from 'ffmpeg-static';

const PUBLIC_DIR = 'public';
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];
const VIDEO_EXTENSIONS = ['.mp4'];

async function optimizeImages() {
  console.log('--- Optimizing Images ---');
  const files = getAllFiles(PUBLIC_DIR, IMAGE_EXTENSIONS);
  
  for (const file of files) {
    const stats = fs.statSync(file);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    
    if (stats.size > 500 * 1024) { // Only optimize if > 500KB
      console.log(`Optimizing ${file} (${sizeMB} MB)...`);
      const buffer = fs.readFileSync(file);
      const ext = path.extname(file).toLowerCase();
      
      let sharpInstance = sharp(buffer);
      
      if (ext === '.jpg' || ext === '.jpeg') {
        sharpInstance = sharpInstance.jpeg({ quality: 80, mozjpeg: true });
      } else if (ext === '.png') {
        sharpInstance = sharpInstance.png({ quality: 80, palette: true });
      }
      
      await sharpInstance.toFile(file + '.tmp');
      fs.renameSync(file + '.tmp', file);
      
      const newStats = fs.statSync(file);
      const newSizeMB = (newStats.size / (1024 * 1024)).toFixed(2);
      console.log(`  -> New size: ${newSizeMB} MB`);
    } else {
      console.log(`Skipping ${file} (${sizeMB} MB) - already small.`);
    }
  }
}

async function optimizeVideos() {
  console.log('--- Optimizing Videos ---');
  if (!ffmpegPath) {
    console.error('FFMPEG not found. Skipping video optimization.');
    return;
  }

  const files = getAllFiles(PUBLIC_DIR, VIDEO_EXTENSIONS);
  
  for (const file of files) {
    const stats = fs.statSync(file);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    
    // Check if it's already optimized by looking for a marker or just skip if small
    // For simplicity, we'll optimize if > 10MB
    if (stats.size > 10 * 1024 * 1024) {
      console.log(`Optimizing ${file} (${sizeMB} MB)...`);
      const tempFile = file + '.tmp.mp4';
      
      try {
        // CRF 28 is a good balance between quality and size
        execSync(`"${ffmpegPath}" -i "${file}" -vcodec libx264 -crf 28 -preset fast -acodec aac -y "${tempFile}"`, { stdio: 'inherit' });
        fs.renameSync(tempFile, file);
        
        const newStats = fs.statSync(file);
        const newSizeMB = (newStats.size / (1024 * 1024)).toFixed(2);
        console.log(`  -> New size: ${newSizeMB} MB`);
      } catch (err) {
        console.error(`Error optimizing ${file}:`, err);
        if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
      }
    } else {
      console.log(`Skipping ${file} (${sizeMB} MB) - already small.`);
    }
  }
}

function getAllFiles(dir, extensions) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(file, extensions));
    } else {
      if (extensions.includes(path.extname(file).toLowerCase())) {
        results.push(file);
      }
    }
  });
  return results;
}

(async () => {
  try {
    await optimizeImages();
    await optimizeVideos();
    console.log('--- Asset Optimization Complete ---');
  } catch (err) {
    console.error('Optimization failed:', err);
    process.exit(1);
  }
})();
