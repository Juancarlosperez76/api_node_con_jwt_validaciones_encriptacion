const { Schema, model } = require('mongoose');

const servicioSchema = Schema({

    Id: {
        type: Number,
        required: [true, 'El campo Id es obligatorio']
    },
    Nombre: {
        type: String,
        required: [true, 'El campo Nombre es obligatorio']
    },
    Descripcion: {
        type: String,
        required: [true, 'El campo Descripción es obligatorio']
    },
    Tiempo: {
        type: Number,
        required: [true, 'El campo Tiempo es obligatorio']
    },
    Estado: {
        type: String,
        required: [true, 'El campo Estado es obligatorio'],
        enum: ['Activo', 'Inactivo']
    }
})

module.exports = model('servicio', servicioSchema)
