const vehiculo = require('../models/vehiculo');

const getVehiculo = async (req, res) => {
    //Consultar todos los datos de la coleccion

    const vehiculos = await vehiculo.find()
    res.json = ({
        msg: 'Vehiculo GET API',
        vehiculos

    })

}

const postVehiculo = async (req, res) => {
    //Desestructuracion
    const { placa, color, precio } = req.body
    //Crear el objeto 
    const vh1 = new Vehiculo(placa, color, precio);

    await vh1.save()

    res.json = ({
        msg: 'VEHICULO POST API',
        vh1

    })
}

module.exports = {
    getVehiculo,
    postVehiculo
}











