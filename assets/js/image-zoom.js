document.addEventListener('DOMContentLoaded', function() {
  const img = document.getElementById('zoomable-image');
  if (img) {
    console.log('Zoomable image found');
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    console.log('Is mobile device:', isMobile);

    if (isMobile) {
      console.log('Initializing PinchZoom');
      if (typeof PinchZoom === 'undefined') {
        console.error('PinchZoom library not loaded');
      } else {
        try {
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
          console.log('PinchZoom initialized successfully');
        } catch (error) {
          console.error('Error initializing PinchZoom:', error);
        }
      }
    } else {
      console.log('Using desktop zoom functionality');
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
  } else {
    console.log('No zoomable image found on this page');
  }
});