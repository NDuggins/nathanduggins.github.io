---
layout: portfolio_item
title: Automated Flood Extents using SAR Imagery
thumbnail: /assets/images/portfolio/SarPosterThumbnail.jpg
full_image: /assets/images/portfolio/SAR_Poster_final_2_0.png
short_description: Google Earth Engine (GEE)
size: wide
---

I advanced automated SAR flood mapping research building on Islam and Meng's 2022 study that tested various SAR band combinations with supervised classification. By stacking their best-performing band combinations and implementing unsupervised classification in Google Earth Engine, I achieved higher accuracy than their supervised methods before even applying the Floodwater Depth Estimation Tool (FwDET), while eliminating the need for manual training data that delays emergency response.

- Applied stacked SAR polarization band math (VV, VH, and derived composites VH+VV, VH/VV) with adaptive 50m speckle filtering to provide classification algorithm with comprehensive spectral information
- Tested workflow on Hurricane Harvey flooding in Harris County, Texas, demonstrating cloud-penetrating SAR capabilities where optical imagery remained obscured during recovery operations
- Achieved 89% classification accuracy using unsupervised methods before applying FwDET, exceeding Islam and Meng's best supervised classification results by ~11 percentage points while eliminating manual training data requirements
- Designed globally scalable architecture enabling rapid application to any flood event or watershed without site-specific retraining
- In progress: incorporating FwDET to further improve accuracy toward ~95% and refining urban false-positive filtering, with planned open-access deployment for emergency management agencies
