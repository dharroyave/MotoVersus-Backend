
import mongoose from "mongoose";


const categoriaSchema = new mongoose.Schema({

 titulo: {
    tyoe:String,
    required: true
 },

 descripcion: {
    type:String,
 }

}); 

export const categoriaModel = mongoose.model("Categorias", categoriaSchema);