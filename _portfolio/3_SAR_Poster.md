---
layout: portfolio_item
title: Automated Flood Extents using SAR Imagery
thumbnail: /assets/images/portfolio/SarPosterThumbnail.jpg
full_image: /assets/images/portfolio/SAR_Poster_final_2_0.png
short_description: Google Earth Engine (GEE)
size: wide
---

I developed an automated SAR flood mapping workflow to overcome the limitations of traditional methods that require slow manual training data collection. By leveraging radar signals that penetrate cloud cover and implementing unsupervised classification in Google Earth Engine, I created a system that rapidly generates flood maps without human intervention, enabling faster deployment for disaster management when optical imagery is unavailable.

- Developed unsupervised K-means classification workflow in Google Earth Engine using Sentinel-1 SAR data, reducing setup to two user-adjustable parameters for rapid emergency deployment
- Tested workflow on Hurricane Harvey flooding in Harris County, Texas, demonstrating cloud-penetrating SAR capabilities where optical imagery remained obscured during recovery operations
- Applied SAR polarization band math (VV, VH, derived composites) with adaptive 50m speckle filtering to enhance water-surface detection while preserving hydrological feature boundaries
- Achieved 89% classification accuracy without human-labeled training data, exceeding supervised methods by ~11 percentage points
- Designed globally scalable architecture enabling rapid application to any flood event or watershed without site-specific retraining
- In progress: incorporating Floodwater Depth Estimation Tool (FwDET) and refining urban false-positive filtering, with planned open-access deployment for emergency management agencies
