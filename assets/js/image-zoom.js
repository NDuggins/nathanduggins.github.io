document.addEventListener('DOMContentLoaded', function() {
  const img = document.getElementById('zoomable-image');
  if (img) {
    img.addEventListener('click', function() {
      const overlay = document.createElement('div');
      overlay.className = 'zoom-overlay';

      const zoomedImg = document.createElement('img');
      zoomedImg.src = this.dataset.fullImage || this.src;
      zoomedImg.style.maxWidth = '100%';
      zoomedImg.style.maxHeight = '100%';
      zoomedImg.style.objectFit = 'contain';

      const closeBtn = document.createElement('span');
      closeBtn.innerHTML = '&times;';
      closeBtn.className = 'close-btn';

      overlay.appendChild(zoomedImg);
      overlay.appendChild(closeBtn);
      document.body.appendChild(overlay);

      overlay.style.display = 'block';

      let isDragging = false;
      let startX, startY, translateX = 0, translateY = 0;

      function handleTouchStart(e) {
        isDragging = true;
        startX = e.touches[0].clientX - translateX;
        startY = e.touches[0].clientY - translateY;
        e.preventDefault();
      }

      function handleTouchMove(e) {
        if (!isDragging) return;
        translateX = e.touches[0].clientX - startX;
        translateY = e.touches[0].clientY - startY;
        zoomedImg.style.transform = `translate(${translateX}px, ${translateY}px)`;
        e.preventDefault();
      }

      function handleTouchEnd() {
        isDragging = false;
      }

      zoomedImg.addEventListener('touchstart', handleTouchStart, { passive: false });
      zoomedImg.addEventListener('touchmove', handleTouchMove, { passive: false });
      zoomedImg.addEventListener('touchend', handleTouchEnd);

      closeBtn.onclick = function() {
        overlay.style.display = 'none';
        document.body.removeChild(overlay);
      }

      overlay.onclick = function(e) {
        if (e.target === overlay) {
          overlay.style.display = 'none';
          document.body.removeChild(overlay);
        }
      }
    });
  }
});