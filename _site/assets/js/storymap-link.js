document.addEventListener('DOMContentLoaded', function() {
  const zoomableImage = document.getElementById('zoomable-image');
  if (zoomableImage) {
    const storymapUrl = zoomableImage.dataset.storymapUrl;
    if (storymapUrl) {
      zoomableImage.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(storymapUrl, '_blank', 'noopener,noreferrer');
      });
    }
  }
});