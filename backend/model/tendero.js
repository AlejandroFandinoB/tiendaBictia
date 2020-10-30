// Modulos internos
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// Esquema
const esquemaTendero = new mongoose.Schema({
    nombre: {
        type: String,
    },
    correo: {
        type: String,
    },
    pass: {
        type: String,
    },
    fechaRegistro: {
        type: Date,
        default: Date.now,
    },
});

// Generamos el JWT (JsonWebToken)

esquemaTendero.methods.generateJWT = function () {
    return jwt.sign({
            // sing para encriptar
            _id: this.id,
            nombre: this.nombre,
            correo: this.correo,
        },
        "clave" // --> palabra secreta para web token
    );
};

// Creamos los exports

const Tendero = mongoose.model("tendero", esquemaTendero); // Usuario seria como una clase
module.exports.Tendero = Tendero; // exportamos el modulo
// en caso que se necesite
module.exports.esquemaTendero = esquemaTendero;