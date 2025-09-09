import express from 'express';
import { potUsers, getAllUsers, putUserById, deleteUserById } from '../controllers/user.controller.js';

// 2. configurar el router
export const userRouter = express.Router();

// 3. definir las rutas
userRouter.post("/crear", potUsers);
userRouter.get("/mostrar", getAllUsers);
userRouter.put("/actualizar/:id", putUserById);
userRouter.delete("/eliminar/:id", deleteUserById);