//1. importamos mongoose
import mongoose from "mongoose";


//2. Definir el schema (estructura) del documento
const usuarioSchema = new mongoose.Schema({

    nombre: {
        type: String, // el tipo de dato la primera en mayusucla
        required: true
    },
    apellido: {
        tyoe: String,
        required: true
    },

    user: {
        type: String,
        required: true
    },

    contrasena: {
        type: String,
        required: true
    },

    correo: {
        type: String,
        required: true
    },

    numero: {
        type: Number,
        required: true
    }
});

export const usuarioModel = mongoose.model("Usuarios", usuarioSchema);