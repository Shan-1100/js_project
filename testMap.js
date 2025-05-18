var map = L.map('map').setView([-33.864859899365975, 151.20308604361705], 13);
var marker = L.marker([-33.864859899365975, 151.20308604361705]).addTo(map);
var popup = L.popup()
    .setLatLng([-33.864859899365975, 151.20308604361705])
    .setContent("The George Institute for Global Health, Australia")
    .openOn(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);