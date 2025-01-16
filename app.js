const express = require('express');
const app = express();
const http = require('http');
const path = require('path');

const socketio = require('socket.io');

const server = http.createServer(app);
const io = socketio(server);


// ejs
app.set("view engine","ejs");
app.set(express.static(path.join(__dirname, "public")));


app.get("/", function(req, res) {
    res.send("hey");
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
