const { Router } = require('express');
const router = Router(); // Obtener la funcion router
const { getVehiculo, postVehiculo } = require("../controller/vehiculo")

router.get('/', getVehiculo)
router.post('/', postVehiculo)



module.exports = router



