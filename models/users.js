
import mongoose from "mongoose";


const usuarioSchema = new mongoose.Schema({
    
 nombre:{
    type:String, // el tipo de dato la primera en mayusucla
    required: true
},
 Apellido: {
    tyoe:String,
    required: true
 },

 User: {
    type:String,
     required: true
 },

contraseña:{
    type:String,
     required: true
},

correo: {
    type:String,
     required: true

},

numero:{
    type:Number,
    required: true
}


}); 

export const usuarioModel = mongoose.model("Usuarios", usuarioSchema);