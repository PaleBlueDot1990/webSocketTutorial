const socketIO = require('socket.io')
const express = require('express')
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.set('view engine', 'ejs');

io.on("connection", () => {
    console.log("connected!");
});

app.get('/', (req, res) => {
    res.render("index");
});

server.listen(3000);
