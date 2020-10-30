// Modulos de NODE
const express = require("express");
const router = express.Router();

// Modulos internos
const {Tendero} = require("../model/tendero");

// Ruta
router.post("/", async(req,res)=>{
    // validamos que el correo exista (en la BD)
    const tendero = await Tendero.findOne({correo: req.body.correo})
    // si el corre no existe
    if(!tendero) return res.status(400).send("Correo o contraseña no son validos")  // error 400 del usuario 
    // si el pass no existe
    if(tendero.pass !== req.body.pass) return res.status(400).send("Correo o contraseña no son validos"); // valida si el pass de usuario es igual al pass de request
    // Generamos el JWT
    const jwtToken = tendero.generateJWT();
    res.status(200).send({jwtToken});
});
module.exports = router;
