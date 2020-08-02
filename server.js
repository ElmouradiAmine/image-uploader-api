const http = require('http');
const app = require('./app');
const PORT = process.env.PORT || 3000;

//We create our http server.
const server = http.createServer(app);

//We start listening into the provided port.
server.listen(PORT);