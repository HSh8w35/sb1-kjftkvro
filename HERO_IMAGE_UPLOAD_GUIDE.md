# Hero Image Upload Guide

## Current Status

The third hero image on the home page has been temporarily fixed with a working placeholder image. However, to use your desired library room image, please follow the instructions below.

## What Happened

The library room image you uploaded encountered a file system error during the upload process, which prevented it from being saved correctly. The corrupted file has been replaced with a working placeholder to ensure the website functions properly.

## How to Upload the Library Room Image

### Option 1: Using the Upload Script (Recommended)

1. Save your library room image to your computer (e.g., `~/Downloads/library-room.jpg`)

2. Run the upload script from the project root directory:
   ```bash
   ./upload-hero-image.sh ~/Downloads/library-room.jpg Revised_Home_Hero_HSH_2.png
   ```

3. The script will:
   - Automatically optimize and compress the image for web use
   - Resize it to the optimal dimensions (max 1920x1280)
   - Save it as `public/Revised_Home_Hero_HSH_2.png`
   - Create a backup of the existing file

### Option 2: Manual Upload

1. Compress your image using an online tool like:
   - https://tinypng.com/
   - https://squoosh.app/
   - https://imageoptim.com/

2. Target specifications:
   - Maximum width: 1920px
   - Maximum height: 1280px
   - File size: Under 500KB (ideally 200-400KB)
   - Format: PNG or WebP

3. Save the compressed image directly to:
   ```
   public/Revised_Home_Hero_HSH_2.png
   ```

4. Verify the image loads correctly by:
   ```bash
   npm run dev
   ```
   Then open the homepage and check the hero section rotation.

## Current Hero Images

The home page hero section rotates through these three images:

1. **Coastal Lobby** (`version_2_coastal_lobby_for_hsh_website_hero_section_home_page.png`)
   - Size: 942KB
   - Dimensions: 1536x1024

2. **Revised Section** (`Revised_Home_Hero_HSH_Section.png`)
   - Size: 781KB
   - Dimensions: 1536x1024

3. **Third Image** (`Revised_Home_Hero_HSH_2.png`) - **Currently a placeholder**
   - Size: 781KB
   - Dimensions: 1536x1024
   - **This should be replaced with your library room image**

## Troubleshooting

If you encounter any issues:

1. Verify the image file is not corrupted:
   ```bash
   identify public/Revised_Home_Hero_HSH_2.png
   ```

2. Check file permissions:
   ```bash
   ls -l public/Revised_Home_Hero_HSH_2.png
   ```

3. Clear your browser cache and reload the page

4. Rebuild the project:
   ```bash
   npm run build
   ```

## Notes

- The image rotation happens every 3 seconds on the home page
- All images are displayed with 20% opacity as a background
- The corrupted original file has been backed up as `Revised_Home_Hero_HSH_2_corrupted.png.bak`
