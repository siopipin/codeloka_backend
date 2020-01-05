require('dotenv').config()
const http = require('http')
const app = require('./app')
const server = http.createServer(app)
const port = 3000;

process.env.JWT_KEY = "codeloka_service";
server.listen(port, () => {
    console.log(__dirname)
});