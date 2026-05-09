import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import sharp from 'sharp';
import ffmpegPath from 'ffmpeg-static';

const PUBLIC_DIR = 'public';
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];
const VIDEO_EXTENSIONS = ['.mp4'];

async function optimizeImages() {
  console.log('--- Aggressive Image Optimization (WebP) ---');
  const files = getAllFiles(PUBLIC_DIR, IMAGE_EXTENSIONS);
  
  for (const file of files) {
    const stats = fs.statSync(file);
    const sizeKB = (stats.size / 1024).toFixed(2);
    
    const isLogo = file.toLowerCase().includes('logo');
    const targetFile = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    console.log(`Optimizing ${file} (${sizeKB} KB)...`);
    
    try {
      let sharpInstance = sharp(file);
      
      const metadata = await sharpInstance.metadata();
      
      // Aggressive resizing
      if (isLogo && metadata.width > 300) {
        sharpInstance = sharpInstance.resize(300);
        console.log(`  -> Resizing logo to 300px width`);
      } else if (metadata.width > 1920) {
        sharpInstance = sharpInstance.resize(1920);
        console.log(`  -> Resizing large image to 1920px width`);
      }
      
      await sharpInstance
        .webp({ quality: 75, effort: 6 })
        .toFile(targetFile);
        
      const newStats = fs.statSync(targetFile);
      const newSizeKB = (newStats.size / 1024).toFixed(2);
      console.log(`  -> New size: ${newSizeKB} KB (WebP)`);
      
      // We will remove original files AFTER updating the source code
      // fs.unlinkSync(file); 
    } catch (err) {
      console.error(`Error optimizing image ${file}:`, err);
    }
  }
}

async function optimizeVideos() {
  console.log('--- Aggressive Video Optimization ---');
  if (!ffmpegPath) {
    console.error('FFMPEG not found. Skipping video optimization.');
    return;
  }

  const files = getAllFiles(PUBLIC_DIR, VIDEO_EXTENSIONS);
  
  for (const file of files) {
    // Skip already optimized videos if they have the suffix
    if (file.includes('.optimized.mp4')) continue;

    const stats = fs.statSync(file);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    
    console.log(`Optimizing ${file} (${sizeMB} MB)...`);
    const tempFile = file.replace('.mp4', '.optimized.mp4');
    
    try {
      // CRF 32 for high compression, 720p for web, slow preset for better efficiency
      execSync(`"${ffmpegPath}" -i "${file}" -vcodec libx264 -crf 32 -preset slow -vf "scale='min(1280,iw)':-2" -acodec aac -b:a 128k -y "${tempFile}"`, { stdio: 'inherit' });
      
      // We'll keep the .optimized.mp4 name to distinguish them
      // fs.renameSync(tempFile, file);
      
      const newStats = fs.statSync(tempFile);
      const newSizeMB = (newStats.size / (1024 * 1024)).toFixed(2);
      console.log(`  -> New size: ${newSizeMB} MB`);
    } catch (err) {
      console.error(`Error optimizing video ${file}:`, err);
      if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
    }
  }
}

function getAllFiles(dir, extensions) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
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
    console.log('IMPORTANT: Update source code to use .webp extensions and .optimized.mp4 for videos.');
  } catch (err) {
    console.error('Optimization failed:', err);
    process.exit(1);
  }
})();
