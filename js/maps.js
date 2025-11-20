// Google Maps Initialisierung
function initMap() {
    // Koordinaten für Berner Fachhochschule BFH, Wirtschaft (Brückenstrasse 73, 3005 Bern)
    const bern = { lat: 46.9424, lng: 7.4405 };

    // Map Element
    const mapElement = document.getElementById('map');

    if (!mapElement) return;

    // Karte erstellen (Satelliten-Ansicht)
    const map = new google.maps.Map(mapElement, {
        zoom: 14.2,
        center: bern,
        mapTypeId: 'satellite',
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true
    });

    // Marker auf BFH Wirtschaft hinzufügen
    const marker = new google.maps.Marker({
        position: bern,
        map: map,
        title: "BFH Wirtschaft - Brückenstrasse 73",
        animation: google.maps.Animation.DROP
    });
}
