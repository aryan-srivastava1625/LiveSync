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
    socket.on("send-location", function(data){
        io.emit('receive-location',{id: socket.id, ...data});
    });

    socket.on("disconnect", function(){
        io.emit("user-disconnected",socket.id);
    });
});

// Routes
app.get("/", function(req, res) {
    res.render("index");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
