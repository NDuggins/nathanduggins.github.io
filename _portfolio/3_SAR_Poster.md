---
layout: portfolio_item
title: Automated Flood Extents using SAR Imagery
thumbnail: /assets/images/portfolio/SarPosterThumbnail.jpg
full_image: /assets/images/portfolio/SAR_Poster_final_2_0.png
short_description: Google Earth Engine (GEE)
size: wide
---

## Automated Flood Extents Using Synthetic Aperture Radar (SAR) - Google Earth Engine

Synthetic Aperture Radar (SAR) flood mapping uses radar signals that penetrate cloud cover to detect water extents during disaster events when optical satellite imagery is unavailable. Traditional SAR methods require manual training data collection that delays emergency response, while automated approaches using unsupervised classification can rapidly generate flood maps without human intervention, enabling faster deployment for disaster management.

- Developed unsupervised K-means classification workflow in Google Earth Engine using Sentinel-1 SAR data from Hurricane Harvey, reducing setup to two user-adjustable parameters for rapid emergency deployment
- Applied SAR polarization band math (VV, VH, derived composites) with adaptive 50m speckle filtering to enhance water-surface detection while preserving hydrological feature boundaries
- Achieved 89% classification accuracy without human-labeled training data, exceeding supervised methods by ~11 percentage points
- Designed globally scalable architecture enabling rapid application to any flood event or watershed without site-specific retraining
- In progress: incorporating Floodwater Depth Estimation Tool (FwDET) and refining urban false-positive filtering, with planned open-access deployment for emergency management agencies
