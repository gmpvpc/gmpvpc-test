
/**
 *
 * EXPRESS AND SOCKET.IO CONF
 *
 */
const express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.use('/public', express.static('node_modules'));
app.use('/front', express.static('front'));

// io.on('connection', (data) => {
//     numOfSockets++;
//     io.sockets.emit('broadcast', "# of active sockets: " + numOfSockets);
// });
//
// io.on('disconnection', (data) => {
//     numOfSockets--;
//     io.sockets.emit('broadcast', "# of active sockets: " + numOfSockets);
// });

server.listen(3000, () => {
    console.log("App is listening on the port 3000")
});