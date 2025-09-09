//1. importacion de dependecias y modulos 
import express from "express"; 
import { postProduct, getProducts, putProduct, deleteProductById } from "../controllers/products.controller.js";


//2. Configurar las rutas 
export const productRouter = express.Router();

//3. Ruta para el POST 
productRouter.post("/crear", postProduct);

//3. Ruta para el GET
productRouter.get("/mostrar", getProducts);

//3. Ruta para el PUT
productRouter.put("/actualizar/:id", putProduct);

//3. Ruta para el DELETE
productRouter.delete("/eliminar/:id", deleteProductById);