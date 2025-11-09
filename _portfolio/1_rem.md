---
layout: portfolio_item
title: Relative Elevation Map (REM)
thumbnail: /assets/images/portfolio/thumbnail_REM.jpg
full_image: /assets/images/portfolio/REM_Poster_Duggins.jpg
short_description: Waimakairiri River, New Zealand
size: extra-wide
---

I created a Relative Elevation Map (REM) that transforms standard elevation data into a surface showing height relative to the active, center river channel. By setting the river level to zero and displaying surrounding terrain as positive values above water, I revealed subtle floodplain features like paleochannels, levees, and terraces that are difficult to interpret from conventional topographic maps, providing essential data for river restoration planning and floodplain management.

- Processed bare-earth DEMs and densified river centerlines to 10-30m vertex spacing, sampling elevations to create high-density water surface elevation profiles
- Applied IDW interpolation to generate smooth water surface models, then subtracted from DEMs using raster calculator to produce relative elevation surfaces
- Masked outputs to floodplain extents and validated against aerial imagery confirming accurate representation of bars, levees, and paleochannels
- Applied cartographic styling with graduated color ramps and hillshade underlays enhancing visualization of subtle geomorphic features

Winner of the People's Choice Award at the 2024 GISCO conference.

<!--
{% include dynamic_content.html type='interactive_map' map_id='waimakairiri-river' %}
-->
