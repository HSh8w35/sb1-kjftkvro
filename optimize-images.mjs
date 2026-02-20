import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const publicDir = './public';
const targetSizeKB = 200;
const quality = 80;

const imagesToOptimize = [
  'Revised_Home_Hero_HSH_2 copy copy copy.png',
  'version_2_coastal_lobby_for_hsh_website_hero_section_home_page.png',
  'Revised_Home_Hero_HSH_Section.png',
  'Revised_Home_Hero_HSH_2.png',
  'Testimonals_page_header.png',
  'dina_and_heidi_at_forward_conference.png',
  'Translucent_Logo_on_home_page.png',
  'gemini_generated_image_hu7jpthu7jpthu7j.png',
  'compass_for_website.png',
  'Transl_Key_only.png',
  'v_2_transparent_perspectives.png',
  'heidi_speaking_conference.jpg',
  'chatgpt_image_dec_26,_2025,_12_38_50_pm.png'
];

async function optimizeImage(inputPath, outputPath) {
  try {
    const stats = await sharp(inputPath).metadata();
    console.log(`Optimizing ${inputPath}...`);
    console.log(`  Original: ${stats.width}x${stats.height}`);

    await sharp(inputPath)
      .resize(2000, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality, effort: 6 })
      .toFile(outputPath);

    const fs = await import('fs');
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

    console.log(`  Optimized: ${(optimizedSize / 1024).toFixed(0)}KB (${savings}% smaller)`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
  }
}

async function main() {
  console.log('Starting image optimization...\n');

  for (const imageName of imagesToOptimize) {
    const inputPath = join(publicDir, imageName);
    const outputName = imageName.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const outputPath = join(publicDir, outputName);

    await optimizeImage(inputPath, outputPath);
  }

  console.log('\nOptimization complete!');
}

main();
