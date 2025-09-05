/*
document.addEventListener('DOMContentLoaded', function() {
  const img = document.getElementById('zoomable-image');
  if (img) {
    img.addEventListener('click', function(e) {
      e.preventDefault();

      const overlay = document.createElement('div');
      overlay.className = 'zoom-overlay';

      const zoomedImg = document.createElement('img');
      zoomedImg.src = this.getAttribute('full-image') || this.src;
      zoomedImg.className = 'zoomed-image';

      const closeBtn = document.createElement('span');
      closeBtn.innerHTML = '&times;';
      closeBtn.className = 'close-btn';

      overlay.appendChild(zoomedImg);
      overlay.appendChild(closeBtn);
      document.body.appendChild(overlay);

      // Calculate zoom position
      const rect = this.getBoundingClientRect();
      const xRatio = (e.clientX - rect.left) / rect.width;
      const yRatio = (e.clientY - rect.top) / rect.height;

      // Function to position the zoomed image
      const positionImage = () => {
        const imgRect = zoomedImg.getBoundingClientRect();
        const xOffset = (imgRect.width * xRatio - window.innerWidth / 2);
        const yOffset = (imgRect.height * yRatio - window.innerHeight / 2);
        zoomedImg.style.transform = `translate(${-xOffset}px, ${-yOffset}px)`;
      };

      // Position the image once it's loaded
      zoomedImg.onload = positionImage;

      // Show the overlay
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

      // Reposition on window resize
      window.addEventListener('resize', positionImage);
    });
  }
});
*/
