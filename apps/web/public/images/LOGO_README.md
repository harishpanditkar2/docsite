# Doqor Logo & Favicon Assets

## Logo Files

### Primary Logo (Colored)
**File:** `logo-with-text.svg`
- **Usage:** Main logo for light backgrounds
- **Colors:** Forest green (#134E4A), Jade (#0F766E), Lime accent (#84CC16)
- **Dimensions:** 240x60px
- **Features:** Medical cross icon + "Doqor" wordmark

### Black Text Variant
**File:** `logo-with-black-text.svg`
- **Usage:** Alternative for light backgrounds requiring high contrast
- **Colors:** Black (#000000), Lime accent (#84CC16)
- **Dimensions:** 240x60px
- **Features:** Medical cross icon + "Doqor" wordmark

### White Logo (Dark Backgrounds)
**File:** `logo-white.svg`
- **Usage:** Logo for dark backgrounds, navigation overlays
- **Colors:** White (#FFFFFF), Lime accent (#84CC16)
- **Dimensions:** 240x60px
- **Features:** Medical cross icon + "Doqor" wordmark

## Favicon Files

### SVG Favicon
**File:** `favicon.svg`
- **Usage:** Modern browser favicon (SVG support)
- **Dimensions:** 512x512px
- **Colors:** Forest green background (#134E4A), White cross, Lime accent (#84CC16)
- **Features:** Simplified medical cross icon optimized for small sizes

### PNG Favicons (To Generate)
**Location:** `favicon/` directory

To generate PNG favicon files from the SVG, use one of these methods:

#### Option 1: Using ImageMagick (Command Line)
```powershell
# Install ImageMagick first: https://imagemagick.org/script/download.php

# 16x16 favicon
magick favicon.svg -resize 16x16 favicon/favicon-16x16.png

# 32x32 favicon
magick favicon.svg -resize 32x32 favicon/favicon-32x32.png

# 180x180 Apple touch icon
magick favicon.svg -resize 180x180 favicon/apple-touch-icon.png

# 192x192 Android chrome
magick favicon.svg -resize 192x192 favicon/android-chrome-192x192.png

# 512x512 Android chrome
magick favicon.svg -resize 512x512 favicon/android-chrome-512x512.png

# favicon.ico (multi-size)
magick favicon.svg -resize 16x16 favicon-16.png
magick favicon.svg -resize 32x32 favicon-32.png
magick favicon-16.png favicon-32.png favicon/favicon.ico
del favicon-16.png favicon-32.png
```

#### Option 2: Using Online Tools
1. Go to https://realfavicongenerator.net/
2. Upload `favicon.svg`
3. Configure settings:
   - **iOS:** Use picture as is (180x180)
   - **Android:** Use picture as is (192x192, 512x512)
   - **Windows:** Use picture as is
   - **macOS Safari:** Use picture as is
4. Download generated package
5. Extract to `favicon/` directory

#### Option 3: Using Figma/Photoshop
1. Import `favicon.svg` to design tool
2. Export as PNG at these sizes:
   - 16x16px (favicon-16x16.png)
   - 32x32px (favicon-32x32.png)
   - 180x180px (apple-touch-icon.png)
   - 192x192px (android-chrome-192x192.png)
   - 512x512px (android-chrome-512x512.png)
3. For .ico file, use online converter (e.g., https://convertio.co/png-ico/)

## Current Implementation

### Header Component
- Uses `logo-with-text.svg` at 48px height (responsive)
- Alt text: "Doqor - Digital Wellness Platform"
- Location: `apps/web/src/components/layout/Header.tsx`

### HTML Head (layout.tsx)
```typescript
icons: {
  icon: [
    { url: '/images/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { url: '/images/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { url: '/images/favicon/favicon.ico', sizes: 'any' },
  ],
  apple: [
    { url: '/images/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  ],
}
```

### Web App Manifest
**File:** `favicon/site.webmanifest`
- App name: "Doqor - Digital Wellness Platform"
- Short name: "Doqor"
- Theme color: #134E4A (forest green)
- Background: #FFFFFF (white)
- Icons: 192x192, 512x512 (Android)

## Design Guidelines

### Logo Usage
1. **Minimum Size:** 120px width (maintains readability)
2. **Clear Space:** Maintain 20px minimum clear space around logo
3. **Background:** Use colored logo on white/light backgrounds, white logo on dark backgrounds
4. **Avoid:** Don't stretch, rotate, or apply effects to logo

### Color Palette
- **Primary:** Forest Green (#134E4A) - Trust, healthcare
- **Secondary:** Jade (#0F766E) - Medical, clinical
- **Accent:** Lime (#84CC16) - Energy, vitality (use sparingly)
- **Text:** Black (#000000), White (#FFFFFF)

### Icon Design
- **Style:** Rounded rectangles (rx="2" to rx="8")
- **Symbol:** Medical cross (vertical + horizontal bars)
- **Accent:** Small lime circle at center (brand signature)
- **Opacity:** Subtle variations (0.8-1.0) for depth

## Checklist

### Completed ✅
- [x] Logo with colored text (SVG)
- [x] Logo with black text (SVG)
- [x] Logo with white text (SVG)
- [x] SVG favicon (512x512)
- [x] site.webmanifest updated with Doqor branding
- [x] Header alt text updated
- [x] Theme color changed to #134E4A

### Pending ⏳
- [ ] Generate PNG favicon files (16x16, 32x32, 180x180, 192x192, 512x512)
- [ ] Generate multi-size favicon.ico
- [ ] Test favicon display in all browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test Apple touch icon on iOS devices
- [ ] Test Android chrome icons on Android devices
- [ ] Verify logo scales properly on mobile devices
- [ ] Update OG image (og-homepage.jpg) with Doqor branding

## Notes
- **Font Stack:** System fonts (system-ui, -apple-system, Segoe UI) for fast loading
- **File Format:** SVG preferred for logos (scalable, small file size)
- **PNG Favicons:** Required for older browser support
- **ICO Format:** Legacy support for IE11 and older browsers
- **Accessibility:** All logos include descriptive alt text
