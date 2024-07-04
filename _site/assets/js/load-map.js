document.addEventListener('DOMContentLoaded', function() {
  const mapContainer = document.getElementById('map-container');
  if (mapContainer) {
    const mapId = mapContainer.dataset.mapId;
    // Here you would typically load your map using a library like Leaflet
    // For now, we'll just update the placeholder text
    mapContainer.innerHTML = `<p>Map ${mapId} would load here</p>`;
  }
});