---
layout: portfolio_item
title: Relative Elevation Map (REM)
thumbnail: /assets/images/portfolio/thumbnail_REM.jpg
full_image: /assets/images/portfolio/REM_Poster_Duggins.jpg
short_description: Waimakairiri River, New Zealand
size: extra-wide
---

## Relative Elevation Model (REM) Development – QGIS

I developed a Relative Elevation Model (REM) workflow in QGIS to visualize floodplain topography relative to active river surface elevation, revealing subtle geomorphic features like paleochannels, levees, and floodplain terraces that are difficult to interpret from standard DEMs alone. Using Dan Coe's IDW interpolation method, I sampled high-resolution elevation points along densified river centerlines to generate a water surface model, then subtracted it from the bare-earth DEM to produce elevation values relative to current river level. This approach transforms complex topographic data into an intuitive surface where zero represents the active channel and positive values indicate height above water, enabling hydrologists and ecologists to rapidly identify flood-prone areas, abandoned channels, and geomorphic features critical for river restoration planning and floodplain management.

- Processed high-resolution bare-earth DEMs preparing elevation data for water surface interpolation and relative elevation analysis
- Densified river centerline vertices to 10-30 meter spacing ensuring adequate point density for accurate longitudinal profile representation
- Sampled DEM elevations to centerline vertices extracting precise water surface elevation values along the river corridor
- Applied IDW interpolation with optimized parameters (power: 2.0, nearest points: 16-24) generating smooth water surface models following river longitudinal profiles
- Generated REM rasters through raster calculator operations subtracting interpolated water surface from bare-earth DEM
- Masked output to floodplain extent eliminating interpolation artifacts and focusing analysis on geomorphically relevant areas
- Validated results against aerial imagery and field observations confirming accurate representation of bars, levees, and paleochannels
- Applied cartographic styling with graduated color ramps and hillshade underlays enhancing visualization of subtle topographic features
- Delivered georeferenced REM products integrated with GIS databases supporting floodplain management and restoration planning

Winner of the People's Choice Award at the 2024 GISCO conference.

<!--
{% include dynamic_content.html type='interactive_map' map_id='waimakairiri-river' %}
-->
