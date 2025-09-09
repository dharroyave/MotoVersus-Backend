import express from 'express';
import { getAllProducts, postProduct, putProductById, deleteProductById } from '../controllers/comments.controller.js';

export const commentRouter = express.Router();

commentRouter.post('/crear',postProduct);

commentRouter.get('/mostrar', getAllProducts);

commentRouter.put('/actualizar/:id', putProductById);

commentRouter.delete('/eliminar/:id', deleteProductById);