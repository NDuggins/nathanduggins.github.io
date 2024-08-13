document.addEventListener('DOMContentLoaded', function() {
  const img = document.getElementById('zoomable-image');
  if (img) {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Mobile approach using PinchZoom.js
      new PinchZoom.default(img, {
        draggableUnzoomed: false,
        lockDragAxis: true,
        setOffsetsOnce: true,
        use2d: true,
        minZoom: 1,
        maxZoom: 4,
        zoomOutFactor: 1.3,
        tapZoomFactor: 2,
      });
    } else {
      // Desktop approach (your existing code)
      img.addEventListener('click', function() {
        const overlay = document.createElement('div');
        overlay.className = 'zoom-overlay';

        const zoomedImg = document.createElement('img');
        zoomedImg.src = this.dataset.fullImage || this.src;

        const closeBtn = document.createElement('span');
        closeBtn.innerHTML = '&times;';
        closeBtn.className = 'close-btn';

        overlay.appendChild(zoomedImg);
        overlay.appendChild(closeBtn);
        document.body.appendChild(overlay);

        overlay.style.display = 'block';

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
  }
});