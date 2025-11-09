---
layout: portfolio_item
title: Automated Flood Extents using SAR Imagery
thumbnail: /assets/images/portfolio/SarPosterThumbnail.jpg
full_image: /assets/images/portfolio/SAR_Poster_final_2_0.png
short_description: Google Earth Engine (GEE)
size: wide
---

## Automated Flood Extents Using Synthetic Aperture Radar (SAR) - Google Earth Engine

I developed an automated flood mapping workflow in Google Earth Engine to support rapid disaster response where cloud cover limits optical imagery and traditional SAR methods depend on slow, manual training data. The system leverages Sentinel-1 radar and unsupervised classification to deliver fast, accurate flood detection.

- Built an unsupervised K-means classification workflow based on Sentinel-1 SAR data from Hurricane Harvey's impact on Harris County, Texas.
- Applied SAR polarization band math using VV, VH, and derived composites (VH+VV, VH/VV, etc.) to enhance water-surface separability.
- Applied adaptive speckle filtering using a 50 m circular convolution kernel to suppress noise while preserving edge integrity and small-scale hydrological features critical for flood boundary accuracy.
- Integrated processing within Google Earth Engine's cloud platform, reducing setup to two user-adjustable parameters for ease of use in emergency contexts.
- Eliminated dependence on human-labeled training data, enabling fully automated flood detection.
- Achieved 89% classification accuracy, exceeding supervised methods by ~11 percentage points.
- Designed the workflow architecture for scalability and global adaptability, enabling rapid application to other flood events or watersheds without retraining or site-specific tuning.
- In progress: incorporating the Floodwater Depth Estimation Tool (FwDET) to improve accuracy toward ~95%, refining urban false-positive filtering.
- Planned publication and open-access GEE deployment for use by emergency management and disaster-response agencies.
