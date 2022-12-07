

const mongoose = require('mongoose');

const dbConnection = async() =>{

    try{
        // Si hay conexion
        mongoose.connect(process.env.MONGODB_CNN, {});
        console.log('Estableciendo conexion con la base de datos');
    }
    catch( error ){

        //En caso de error en la conexion
        console.log('Conexion no establecida');
    }       
}


module.exports = {
    dbConnection
}
