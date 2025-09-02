//1. importamos mongoose
import mongoose from "mongoose";

//2. Definimos el esquema (estructura) del documento
const comentarioSchema = new mongoose.Schema({

 texto: {
    type: String,
    required: true
  },
  usuario: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  calificacion: {
    type: Number,
    min: 1,
    max: 5,
  }

}); 

export const comentarioModel = mongoose.model("Comentarios", comentarioSchema);