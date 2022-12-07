const { Schema, model } = require('mongoose');

const VehiculoSchema = Schema({

    placa: {
        type: String
    },
    color: {
        type: String
    },
    precio: {
        type: Number
    }

})

module.exports = model('Vehiculo', VehiculoSchema)