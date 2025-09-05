/*
document.addEventListener('DOMContentLoaded', function() {
  const zoomableImage = document.getElementById('zoomable-image');
  if (zoomableImage) {
    const storymapUrl = zoomableImage.dataset.storymapUrl;
    if (storymapUrl) {
      zoomableImage.addEventListener('click', function(e) {
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          e.stopPropagation(); // Prevent the zoom overlay from opening
          window.open(storymapUrl, '_blank', 'noopener,noreferrer');
        }
      });
    }
  }
});
*/
