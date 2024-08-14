document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('zoomable-image');
    if (img) {
        img.addEventListener('click', function(e) {
            e.preventDefault();

            const fullImage = this.getAttribute('full-image') || this.src;
            const mapId = this.getAttribute('data-map-id');

            // Create overlay
            const overlay = document.createElement('div');
            overlay.className = 'image-popup';

            // Create content container
            const contentContainer = document.createElement('div');
            contentContainer.className = 'popup-content';

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
                zoomedImg.className = 'zoomable';
                contentContainer.appendChild(zoomedImg);

                // Add zoom functionality
                let scale = 1;
                let panning = false;
                let pointX = 0;
                let pointY = 0;
                let start = { x: 0, y: 0 };

                function setTransform() {
                    zoomedImg.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
                }

                zoomedImg.onmousedown = function(e) {
                    e.preventDefault();
                    start = { x: e.clientX - pointX, y: e.clientY - pointY };
                    panning = true;
                }

                zoomedImg.onmouseup = function(e) {
                    panning = false;
                }

                zoomedImg.onmousemove = function(e) {
                    e.preventDefault();
                    if (!panning) {
                        return;
                    }
                    pointX = (e.clientX - start.x);
                    pointY = (e.clientY - start.y);
                    setTransform();
                }

                zoomedImg.onwheel = function(e) {
                    e.preventDefault();
                    let xs = (e.clientX - pointX) / scale;
                    let ys = (e.clientY - pointY) / scale;
                    let delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
                    (delta > 0) ? (scale *= 1.2) : (scale /= 1.2);
                    pointX = e.clientX - xs * scale;
                    pointY = e.clientY - ys * scale;

                    setTransform();
                }
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

            // Close overlay function
            const closeOverlay = function() {
                document.body.removeChild(overlay);
            };

            // Close overlay on button click or overlay click
            closeBtn.onclick = closeOverlay;
            overlay.onclick = function(e) {
                if (e.target === overlay) {
                    closeOverlay();
                }
            };

            // Show the overlay
            overlay.style.display = 'block';
        });
    }
});