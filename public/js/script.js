const socket = io();
console.log("hey");

// Initialize the map
const map = L.map('map').setView([51.505, -0.09], 13);

// Add the tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);