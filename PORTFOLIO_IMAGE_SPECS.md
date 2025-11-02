# Portfolio Thumbnail Image Specifications

This document defines the required dimensions and specifications for portfolio thumbnail images to ensure proper alignment in the grid layout.

## Grid System Overview

The portfolio uses a 4-column CSS Grid layout with uniform row heights (`grid-auto-rows: 1fr`). Each grid cell is square by default, and portfolio items can span multiple columns or rows.

## Image Dimension Requirements

All portfolio thumbnails **must** be exported at these exact aspect ratios to prevent cropping and maintain proper grid alignment:

### Base Unit: 800px

For optimal quality on modern displays, use 800px as the base dimension:

| Size Class | Grid Span | Required Aspect Ratio | Recommended Dimensions | Example Use Case |
|------------|-----------|----------------------|------------------------|------------------|
| **Standard** (1×1) | 1 column × 1 row | **1:1** (square) | 800×800px | Regular portfolio items |
| **Wide** (2×1) | 2 columns × 1 row | **2:1** (landscape) | 1600×800px | Panoramic images, wide compositions |
| **Extra Wide** (3×1) | 3 columns × 1 row | **3:1** (ultra-wide) | 2400×800px | Very wide panoramas, banner-style images |
| **Tall** (1×2) | 1 column × 2 rows | **1:2** (portrait) | 800×1600px | Portrait-oriented images, vertical compositions |

## Current Portfolio Items

Reference for existing portfolio items and their required updates:

| Portfolio Item | File Name | Current Dimensions | Current Ratio | Size Class | Target Dimensions | Status |
|----------------|-----------|-------------------|---------------|------------|-------------------|--------|
| Dickens Farm | DickensLayout.jpg | 5400×5400 | 1:1 ✓ | Standard (1×1) | 800×800px | ✓ **Correct ratio** (resize recommended) |
| Point Reyes UAV | SlideStorymapCover.jpg | 1896×884 | 2.15:1 ✗ | Tall (1×2) | 800×1600px | ✗ **Needs re-export** |
| Test3 (Abstract Paint) | abstractPaint_vert.JPG | 301×510 | 0.59:1 ✗ | Wide (2×1) | 1600×800px | ✗ **Needs re-export** |
| REM (Relative Elevation) | Duggins_N_Contest.jpg | 10875×7275 | 1.5:1 ✗ | Extra Wide (3×1) | 2400×800px | ✗ **Needs re-export** |

## Image Preparation Guidelines

### 1. Export Settings
- **Format**: JPEG (.jpg)
- **Quality**: 85-90% (balance between quality and file size)
- **Color Space**: sRGB
- **Resolution**: 72 DPI (web standard)

### 2. File Size Optimization
- Target file size: 100-300KB per image
- Use tools like ImageOptim, TinyPNG, or Photoshop's "Save for Web"
- Avoid images larger than 500KB

### 3. Composition Guidelines
- **Standard (1×1)**: Center the subject; works well for logos, square compositions
- **Wide (2×1)**: Use for landscapes, architectural shots, horizontal compositions
- **Extra Wide (3×1)**: Best for panoramas, very wide scenes, banner images
- **Tall (1×2)**: Use for portraits, vertical compositions, tall buildings

### 4. Image Cropping Strategy
When preparing your images:
1. Open the original image in your preferred editor (Photoshop, GIMP, etc.)
2. Create a crop guide with the exact aspect ratio needed (e.g., 1:2 for tall items)
3. Position the crop to highlight the most important elements
4. Export at the recommended dimensions
5. Test the thumbnail on your site before finalizing

## Technical Implementation

### CSS Grid Configuration
```css
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr; /* Creates uniform square cells */
    gap: 10px;
    padding: 20px;
}
```

### Image Display
Images use `object-fit: cover` as a fallback, but proper aspect ratios eliminate cropping:
```css
.portfolio-thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Safety net for minor variations */
}
```

## Responsive Breakpoints

The grid adapts to different screen sizes:

- **Desktop (>1200px)**: 4 columns
- **Tablet (768px-1200px)**: 3 columns (extra-wide items span 3)
- **Mobile (<768px)**: 2 columns (extra-wide items span 2)

When preparing images, ensure they look good at smaller sizes too.

## Quality Checklist

Before uploading a portfolio thumbnail, verify:

- [ ] Image matches the exact aspect ratio for its size class
- [ ] Image is exported at recommended dimensions (or proportionally scaled)
- [ ] File format is JPEG with 85-90% quality
- [ ] Color space is sRGB
- [ ] File size is under 500KB
- [ ] Image composition looks good at the target aspect ratio
- [ ] No important elements are cut off at the edges

## Adding New Portfolio Items

When adding a new portfolio item:

1. Determine the appropriate size class (standard, wide, extra-wide, or tall)
2. Export the image at the correct aspect ratio using the dimensions table above
3. Name the file descriptively (e.g., `project-name-thumbnail.jpg`)
4. Place the image in the appropriate directory
5. Add the size class to the portfolio item's front matter:
   ```yaml
   ---
   title: Your Project Name
   thumbnail: /path/to/thumbnail.jpg
   size: tall  # Options: (none for 1×1), wide, extra-wide, tall
   ---
   ```

## Tools and Resources

### Image Editing
- **Adobe Photoshop**: Professional editing and precise cropping
- **GIMP**: Free alternative to Photoshop
- **Affinity Photo**: One-time purchase alternative

### Image Optimization
- **ImageOptim** (Mac): Drag-and-drop compression
- **TinyPNG** (Web): Online PNG and JPEG compression
- **Squoosh** (Web): Google's image optimization tool

### Aspect Ratio Calculators
- **Aspect Ratio Calculator**: https://calculateaspectratio.com/
- Use to verify your dimensions match the required ratios

## Questions?

If you're unsure about which size class to use for a portfolio item:
- Use **Standard (1×1)** as the default for most items
- Use **Tall (1×2)** for portrait-oriented projects that benefit from vertical space
- Use **Wide (2×1)** for landscape projects or items that need more horizontal room
- Use **Extra Wide (3×1)** sparingly for exceptionally wide content

## Version History

- **2025-11-02**: Initial specification created
  - Defined base dimensions at 800px
  - Removed CSS aspect-ratio overrides
  - Added grid-auto-rows: 1fr for uniform row heights
