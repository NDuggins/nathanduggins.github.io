document.addEventListener('DOMContentLoaded', function() {
  const img = document.getElementById('zoomable-image');
  if (img && !isMobile()) {
    img.addEventListener('click', function() {
      const overlay = document.createElement('div');
      overlay.className = 'zoom-overlay';

      const zoomedImg = document.createElement('img');
      zoomedImg.src = this.src;

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

      zoomedImg.onclick = function(e) {
        e.stopPropagation();
      }

      overlay.onclick = function() {
        overlay.style.display = 'none';
        document.body.removeChild(overlay);
      }
    });
  }
});

function isMobile() {
  return window.innerWidth <= 768;
}