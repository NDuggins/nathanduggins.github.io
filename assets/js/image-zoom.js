document.addEventListener('DOMContentLoaded', function() {
  const img = document.getElementById('zoomable-image');
  if (img) {
    img.addEventListener('click', function() {
      const overlay = document.createElement('div');
      overlay.className = 'zoom-overlay';

      const zoomedImg = document.createElement('img');
      zoomedImg.src = this.getAttribute('full-image') || this.src;

      const closeBtn = document.createElement('span');
      closeBtn.innerHTML = '&times;';
      closeBtn.className = 'close-btn';

      overlay.appendChild(zoomedImg);
      overlay.appendChild(closeBtn);
      document.body.appendChild(overlay);

      overlay.style.display = 'block';

      const closeOverlay = function() {
        overlay.style.display = 'none';
        document.body.removeChild(overlay);
      };

      closeBtn.addEventListener('click', closeOverlay);
      overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
          closeOverlay();
        }
      });

      // Prevent zoom on double-tap for touch devices
      zoomedImg.addEventListener('touchstart', function(e) {
        e.preventDefault();
      });
    });
  }
});