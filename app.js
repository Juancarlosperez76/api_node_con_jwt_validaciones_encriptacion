
//Vincular clases o archivos 
const Server = require('./models/server');

//Permite emplear el .env
require('dotenv').config();

//Instanciar un objeto de la clase Server
const server = new Server();

//Escuchar el puerto
server.listen()