document.addEventListener('DOMContentLoaded', function() {
  const img = document.getElementById('zoomable-image');
  if (img) {
    img.addEventListener('click', function(e) {
      e.preventDefault();

      const fullImage = this.getAttribute('data-full-image') || this.src;

      // Create overlay
      const overlay = document.createElement('div');
      overlay.className = 'zoom-overlay';

      // Create zoomed image
      const zoomedImg = document.createElement('img');
      zoomedImg.src = fullImage;

      // Add close button
      const closeBtn = document.createElement('span');
      closeBtn.innerHTML = '&times;';
      closeBtn.className = 'close-btn';

      // Append elements
      overlay.appendChild(zoomedImg);
      overlay.appendChild(closeBtn);
      document.body.appendChild(overlay);

      // Close overlay on button click or overlay click
      closeBtn.onclick = function() {
        document.body.removeChild(overlay);
      }
      overlay.onclick = function(e) {
        if (e.target === overlay) {
          document.body.removeChild(overlay);
        }
      }
    });
  }
});