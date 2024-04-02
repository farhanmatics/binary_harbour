require('dotenv').config();
const http = require('http');
const app = require('./app');
const port = process.env.APP_PORT || 7000;

const server = http.createServer(app);
server.listen(port);