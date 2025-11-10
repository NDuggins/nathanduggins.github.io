---
layout: portfolio_item
title: Relative Elevation Map (REM)
thumbnail: /assets/images/portfolio/thumbnail_REM.jpg
full_image: /assets/images/portfolio/REM_Poster_Duggins.jpg
short_description: Waimakairiri River, New Zealand
size: extra-wide
---

I created a Relative Elevation Map (REM) of the Waimakairiri River in New Zealand to visualize floodplain features that are difficult to detect in standard topographic maps. By transforming elevation data to show height relative to the active river channel, I revealed paleochannels, natural levees, and terraces that document the river's historical evolution and inform current restoration planning.

- Processed bare-earth DEMs and densified river centerlines to 10-30m vertex spacing, sampling elevations to create high-density water surface elevation profiles
- Applied IDW interpolation to generate smooth water surface models, then subtracted from DEMs using raster calculator to produce relative elevation surfaces
- Masked outputs to floodplain extents and validated against aerial imagery confirming accurate representation of bars, levees, and paleochannels
- Applied cartographic styling with graduated color ramps and hillshade underlays enhancing visualization of subtle geomorphic features
- Developed large-format cartographic presentation combining technical rigor with visual design to communicate floodplain geomorphology to both scientific and public audiences

Winner of the People's Choice Award at the 2024 GISCO conference.

<!--
{% include dynamic_content.html type='interactive_map' map_id='waimakairiri-river' %}
-->
