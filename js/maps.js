// Google Maps Initialisierung
function initMap() {
    // Koordinaten für Berner Fachhochschule BFH, Wirtschaft (Marzilistrasse)
    const bern = { lat: 46.94064, lng: 7.43715 };

    // Map Element
    const mapElement = document.getElementById('map');

    if (!mapElement) return;

    // Karte erstellen (Satelliten-Ansicht)
    const map = new google.maps.Map(mapElement, {
        zoom: 13,
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

    // Marker auf BFH Marzili hinzufügen
    const marker = new google.maps.Marker({
        position: bern,
        map: map,
        title: "BFH Marzili",
        animation: google.maps.Animation.DROP
    });
}
