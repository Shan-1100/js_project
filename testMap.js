
var map = L.map('map').setView([32.78720606581554, 129.86642338802017], 13);
var marker = L.marker([32.78720606581554, 129.86642338802017]).addTo(map);
marker.bindPopup("<b> Graduate School of Biomedical Sciences, Nagasaki University, Japan </b><br> Site of HTLV-1 Clinical Research").openPopup();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var mapSalvador = L.map('mapSalvador').setView([-12.99267836882544, -38.51984238154737], 13);
var markerSalvador = L.marker([-12.99267836882544, -38.51984238154737]).addTo(mapSalvador);
markerSalvador.bindPopup("<b> Hospital Universitário Professor Edgard Santos, Salvador, Brazil</b><br>HTLV-1 studies").openPopup();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapSalvador);

var mapBelem = L.map('mapBelem').setView([-22.778905484820832, -47.58147935703872], 13);
var markerBelem = L.marker([-22.778905484820832, -47.58147935703872]).addTo(mapBelem);
markerBelem.bindPopup("<b> Universidade Metodista de Piracicaba, Belém, Brazil</b><br>HTLV-1 studies").openPopup();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapBelem);

var mapBethesda = L.map('mapBethesda').setView([39.0005399372308, -77.10138888148074], 13);
var markerBethesda = L.marker([39.0005399372308, -77.10138888148074]).addTo(mapBethesda);
markerBethesda.bindPopup("<b> National Institute of Health, Bethesda, Maryland, USA </b><br>HTLV-1 studies").openPopup();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapBethesda);

const mapMultiple = L.map('mapMultiple').setView([40.406, -79.107], 6);
const markerMultiple1 = L.marker([40.848722217858395, -73.84460536206392]).addTo(mapMultiple);
markerMultiple1.bindPopup("<b> Montefiore, Einstien, Bronx, NY, USA: </b><br>Funded HTLV-1 clinical studies").openPopup();
const markerMultiple2 = L.marker([39.0005399372308, -77.10138888148074]).addTo(mapMultiple);
markerMultiple2.bindPopup("<b> NIH, Bethesda, MD, USA: </b><br>Funded HTLV-1 clinical studies").openPopup();
const markerMultiple3 = L.marker([39.9612, -82.9988]).addTo(mapMultiple);
markerMultiple3.bindPopup("<b> Ohio State University Comprehensive Cancer Center, OH, USA: </b><br>Funded HTLV-1 clinical studies").openPopup();
const markerMultiple4 = L.marker([39.328, -76.620]).addTo(mapMultiple);
markerMultiple4.bindPopup("<b> Johns Hopkins University/Sidney Kimmel Cancer Center, MD, USA: </b><br>Funded HTLV-1 clinical studies").openPopup();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapMultiple);
