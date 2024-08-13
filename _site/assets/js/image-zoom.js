document.addEventListener('DOMContentLoaded', function() {
  const img = document.getElementById('zoomable-image');
  if (img) {
    img.addEventListener('click', function(e) {
      e.preventDefault();

      const fullImage = this.getAttribute('data-full-image') || this.src;
      const mapId = this.getAttribute('data-map-id');

      // Create overlay
      const overlay = document.createElement('div');
      overlay.className = 'zoom-overlay';

      // Create content container
      const contentContainer = document.createElement('div');
      contentContainer.className = 'zoom-content';

      if (mapId) {
        // If it's a map, create a map container
        const mapContainer = document.createElement('div');
        mapContainer.id = 'map-container';
        mapContainer.setAttribute('data-map-id', mapId);
        contentContainer.appendChild(mapContainer);
        // The actual map loading will be handled by load-map.js
      } else {
        // If it's an image, create a zoomed image
        const zoomedImg = document.createElement('img');
        zoomedImg.src = fullImage;
        contentContainer.appendChild(zoomedImg);
      }

      // Add close button
      const closeBtn = document.createElement('span');
      closeBtn.innerHTML = '&times;';
      closeBtn.className = 'close-btn';

      // Append elements
      overlay.appendChild(contentContainer);
      overlay.appendChild(closeBtn);
      document.body.appendChild(overlay);

      // If it's a map, trigger the map loading
      if (mapId) {
        const event = new Event('mapcontainer-created');
        document.dispatchEvent(event);
      }

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