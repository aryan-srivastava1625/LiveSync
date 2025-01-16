const socket = io();
console.log("hey");

if(navigator.geolocation){
    navigator.geolocation.watchPosition((position)=>{
        const {latitude , longitude } = position.coords;
        socket.emit("send-location",{latitude , longitude});
    },
    (error)=>{
        console.error(error);
    },
    {
        enableHighAccuracy: true,
        timeout:5000,
        maximumAge:0,

    }
);
}



// Initialize the map
const map = L.map('map').setView([0,0], 10);

// Add the tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© LiveSync'
}).addTo(map);

