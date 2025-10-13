import express from 'express';
import { auth } from "../middleware/auth.js";
import { potUsers, getAllUsers, putUserById, deleteUserById, getUserById } from '../controllers/user.controller.js';

// 2. configurar el router
export const userRouter = express.Router();

// 3. definir las rutas
userRouter.post("/crear", potUsers);
userRouter.get("/mostrar", auth("admin"), getAllUsers);
userRouter.get("/mostrar/:id", auth("admin"), getUserById);
userRouter.put("/actualizar/:id", putUserById);
userRouter.delete("/eliminar/:id", deleteUserById);