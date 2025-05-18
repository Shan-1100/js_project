
var map = L.map('map').setView([35.59953867565579, 139.54847218388477], 5);
var marker1 = L.marker([35.59953867565579, 139.5484721838847]).addTo(map);
marker1.bindPopup("<b> St. Marianna University School of Medicine, Kanagawa, Japan </b><br>Conducted multiple clinical trials").openPopup();
var marker2 = L.marker([31.72144340048172, 130.6034920496261]).addTo(map);
marker2.bindPopup("<b> Kagoshima University Graduate School of Medical and Dental Sciences, Kagoshima, Japan. </b><br>Conducted one clinical trial").openPopup();
var marker2 = L.marker([31.829794259811525, 131.4152121360319]).addTo(map);
marker2.bindPopup("<b> University of Miyazaki, Miyazaki, Japan.. </b><br>Conducted one clinical trial").openPopup();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var mapBrazil = L.map('mapBrazil').setView([-12.99267836882544, -38.51984238154737], 4);
var markerSalvador = L.marker([-12.99267836882544, -38.51984238154737]).addTo(mapBrazil);
markerSalvador.bindPopup("<b> Hospital Universitário Professor Edgard Santos, Salvador, Brazil</b><br>Conducted multiple clinical trials").openPopup();
var markerBelem = L.marker([-22.778905484820832, -47.58147935703872]).addTo(mapBrazil);
markerBelem.bindPopup("<b> Universidade Metodista de Piracicaba, Belém, Brazil</b><br>Conducted one clinical trial").openPopup();
var markerSalvador2 = L.marker([-13.00279768527676, -38.50739491822406]).addTo(mapBrazil);
markerSalvador2.bindPopup("<b> Universidade Federal da Bahia, Salvador, Brazil</b><br>Conducted one clinical trial").openPopup();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapBrazil);

var mapIran = L.map('mapIran').setView([36.28305913204988, 59.543423963352154], 7);
var markerIran = L.marker([36.28305913204988, 59.543423963352154]).addTo(mapIran);
markerIran.bindPopup("<b> Mashhad University of Medical Sciences, Mashhad, Iran </b><br>Conducted one clinical trial").openPopup();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapIran);

const mapMultiple = L.map('mapMultiple').setView([40.406, -79.107], 6);
const markerMultiple1 = L.marker([40.848722217858395, -73.84460536206392]).addTo(mapMultiple);
markerMultiple1.bindPopup("<b> Montefiore, Einstien, Bronx, NY, USA: </b><br>Conducted one clinical trial").openPopup();
const markerMultiple2 = L.marker([39.0005399372308, -77.10138888148074]).addTo(mapMultiple);
markerMultiple2.bindPopup("<b> NIH, Bethesda, MD, USA: </b><br>Conducted multiple clinical trials").openPopup();
const markerMultiple3 = L.marker([39.9612, -82.9988]).addTo(mapMultiple);
markerMultiple3.bindPopup("<b> Ohio State University Comprehensive Cancer Center, OH, USA: </b><br>Conducted one clinical trial").openPopup();
const markerMultiple4 = L.marker([39.328, -76.620]).addTo(mapMultiple);
markerMultiple4.bindPopup("<b> Johns Hopkins University/Sidney Kimmel Cancer Center, MD, USA: </b><br>Conducted one clinical trial").openPopup();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapMultiple);
