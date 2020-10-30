// Modulos internos
const mongoose = require("mongoose");


// Esquema
const esquemaProducto = new mongoose.Schema({
    idTendero: String,
    nombre: String,
    tipo: String,
    precio: Number,
    fecha: {
        type: Date,
        default: Date.now,
    },
});


// Creamos los exports
const Producto = mongoose.model("producto",esquemaProducto);
module.exports= Producto; 
