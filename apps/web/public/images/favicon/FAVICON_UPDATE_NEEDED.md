# Favicon Update Required

The Doqor SVG favicon has been created and is now the primary favicon. However, PNG versions need to be regenerated for full browser compatibility.

## Current Status
✅ SVG favicon created: `/images/favicon.svg` and `/public/favicon.svg`
✅ Layout.tsx updated to use SVG as primary favicon
⚠️ Old Glowheal PNG favicons still in `/images/favicon/` folder

## Required: Regenerate PNG Favicons

The PNG favicon files still show the old Glowheal branding. Generate new ones:

### Option 1: Using Online Tool (Easiest)
1. Go to https://realfavicongenerator.net/
2. Upload `/public/images/favicon.svg`
3. Configure settings:
   - iOS: Use picture as is
   - Android: Use picture as is
   - Keep all recommended sizes
4. Download generated package
5. Replace files in `apps/web/public/images/favicon/` directory

### Option 2: Using ImageMagick (Command Line)
```powershell
# Install ImageMagick first: https://imagemagick.org/script/download.php

# Generate PNG files
magick apps\web\public\images\favicon.svg -resize 16x16 apps\web\public\images\favicon\favicon-16x16.png
magick apps\web\public\images\favicon.svg -resize 32x32 apps\web\public\images\favicon\favicon-32x32.png
magick apps\web\public\images\favicon.svg -resize 180x180 apps\web\public\images\favicon\apple-touch-icon.png
magick apps\web\public\images\favicon.svg -resize 192x192 apps\web\public\images\favicon\android-chrome-192x192.png
magick apps\web\public\images\favicon.svg -resize 512x512 apps\web\public\images\favicon\android-chrome-512x512.png

# Generate ICO file (multi-size)
magick apps\web\public\images\favicon.svg -define icon:auto-resize=16,32,48 apps\web\public\images\favicon\favicon.ico
```

### Option 3: Using Photoshop/Figma
1. Open `favicon.svg` in design tool
2. Export at these sizes:
   - 16x16px (favicon-16x16.png)
   - 32x32px (favicon-32x32.png)
   - 180x180px (apple-touch-icon.png)
   - 192x192px (android-chrome-192x192.png)
   - 512x512px (android-chrome-512x512.png)
3. For ICO: Use online PNG to ICO converter

## Files to Replace
- `apps/web/public/images/favicon/favicon-16x16.png`
- `apps/web/public/images/favicon/favicon-32x32.png`
- `apps/web/public/images/favicon/apple-touch-icon.png`
- `apps/web/public/images/favicon/android-chrome-192x192.png`
- `apps/web/public/images/favicon/android-chrome-512x512.png`
- `apps/web/public/images/favicon/favicon.ico`

## Testing After Update
1. Clear browser cache (Ctrl+Shift+Delete)
2. Reload site with hard refresh (Ctrl+F5)
3. Check favicon appears correctly in:
   - Browser tab
   - Bookmarks
   - Mobile home screen (iOS/Android)
   - Windows taskbar (pinned sites)

## Current Favicon Design
- **Background:** Forest green circle (#134E4A)
- **Icon:** White medical cross with rounded corners
- **Accent:** Small lime green dot at center (#84CC16)
- **Style:** Minimalist, professional, medical-themed
- **Size:** 512x512px base SVG, scales to all sizes
