
const server = require('~modules/server');
const app = require('~modules/app');

app.route(server.router, server.server);

server.startServer();

const io = require('socket.io').listen(server);
