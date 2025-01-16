const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

const server = http.createServer(app);
const io = socketio(server);

// Set view engine
app.set("view engine", "ejs");

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Socket.io connection
io.on("connection", function(socket) {
    console.log("connected");
});

// Routes
app.get("/", function(req, res) {
    res.render("index");
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});