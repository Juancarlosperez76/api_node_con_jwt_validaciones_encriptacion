const { Schema, model } = require('mongoose');

const compraSchema = Schema({

    Id: {
        type: Number,
        required: [true, 'El campo Id es obligatorio']
    },
    Producto: {
        type: String,
        required: [true, 'El campo Nombre es obligatorio']
    },
    FechaCompra: {
        type: String,
        required: [true, 'El campo Descripción es obligatorio']
    },
    Proveedor: {
        type: String,
        required: [true, 'El campo Tiempo es obligatorio']
    },
    Total: {
        type: Number,
        required: [true, 'El campo Tiempo es obligatorio']
    },
    Estado: {
        type: String,
        required: [true, 'El campo Estado es obligatorio'],
        enum: ['Activo', 'Inactivo']
    }
})

module.exports = model('compra', compraSchema)