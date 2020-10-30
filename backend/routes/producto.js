// Modulo de node
const express = require("express");
const router = express.Router();

// Modulos internos 
const  Producto  = require("../model/producto");
const { Tendero } = require("../model/tendero");
const auth = require("../middleware/auth");

// ruta
router.post("/",auth,async(req,res)=>{
    // Obtenemos el id del usuario autenticado
    const tendero = await Tendero.findById(req.tendero._id);

    // Si el usario no existe
    if(!tendero) return res.status(400).send("El usuario no existe");

    // Si el usuario existe creamos un actividad para ese usuario
    const producto = new Producto({
        idTendero: tendero._id,
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        precio: req.body.precio,
    })
    // Enviamos resultado
    const result = await producto.save();
    res.status(200).send(result)  
})

module.exports = router;
