const config = require('~modules/config');
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const logger = require('morgan');

app.use(express.static(path.join(__dirname, '..', '..', 'client')));

app.use(logger('dev'));

module.exports = {
    router: app,
    server,
    startServer: () => {
        server.listen(config.server.port);
        console.log(`Server Started at port ${config.server.port}`);
    }
}