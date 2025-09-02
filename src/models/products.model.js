//1. Importamos mongoose
import mongoose from "mongoose";

//2. Definimos el esquema (estructura) del documento
const productoSchema = new mongoose.Schema({

nombre: {
    type: String,
    required: true
  },
  cilindraje: {
    type: Number,
    required: true
  },
  motor: {
    type: String,
    required: true
  },
  potencia: {
    type: String, // Puede almacenar "16.5 HP @ 8500 RPM"
    required: true
  },
  transmision: {
    type: String,
    required: true
  },
  peso: {
    type: Number,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  imagenUrl: {
    type: String,
    required: true // URL o ruta del archivo de imagen
  },
  categoria: {
    type: String,
    enum: ["Deportivas", "Enduro", "Automáticas"],
    required: true
    }
  });

  export const productoModel = mongoose.model("Productos", productoSchema);
