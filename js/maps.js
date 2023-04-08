// crear objeto mapa
var map = L.map("map").setView([-15.852700,-70.019137],17);//4.639386,-74.082412],5.3  -15.852700,-70.019137

// enlazar el openstreetmap a mi objeto mapa
var osm = L.tileLayer("http://tile.openstreetmap.org/{z}/{x}/{y}.png");//openstreetmap
var gsatell = L.tileLayer("http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}");//google satellite
var ghybrid = L.tileLayer("https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}").addTo(map);//Google Hybrid
var estreets = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}");//esri streets

// Agregar mapa base
var carto = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png');

// Agregar plugin MiniMap
var minimap = new L.Control.MiniMap(carto,
    {
        toggleDisplay: true,
        minimized: false,
        position: "bottomleft",
    }).addTo(map);

// Agregar escala
 new L.control.scale({imperial: false}).addTo(map);

// // Configurar PopUp
// function popup(feature,layer){
//     if(feature.properties && feature.properties.BARRIO){
//         layer.bindPopup("<strong>Barrio: </strong>" + feature.properties.BARRIO + "<br/>" + "<strong>Localidad: </strong>" + feature.properties.LOCALIDAD);
//     }
// }

// Agregar capa en formato GeoJson
var lot = L.geoJson(lotes,{
    style:{
      weight: 1,
      color: 'blue',
      fillOpacity:0
    },
});

var manz = L.geoJson(manzanas,{
    style:{
      weight: 2,
      color: 'red',
      fillOpacity:0
    },
}).addTo(map);

// var barriosJS = L.geoJson(barrios,{
//     onEachFeature: popup
// }).addTo(map);


// tabla de contenido
var baseMap = {
    "Google Hybrid": ghybrid,
    "Google Satellite": gsatell,
    "OpenStreetMap": osm,
    "ESRI Streets": estreets
};
var shp = {
    "Manzanas": manz,
    "Lotes": lot
}
L.control.layers(baseMap,shp).addTo(map);

// atribucion 
map.attributionControl.addAttribution('Richard Edson Vilcanqui Mamani &copy; <a href="https://www.facebook.com/richard.vilcanquimamani">Facebook</a>');