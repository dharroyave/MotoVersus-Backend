import express from 'express';
import { getAllComments, postComment, putCommentById, deleteCommentById } from '../controllers/comments.controller.js';

export const commentRouter = express.Router();

commentRouter.post('/crear',postComment);

commentRouter.get('/mostrar', getAllComments);

commentRouter.put('/actualizar/:id', putCommentById);

commentRouter.delete('/eliminar/:id', deleteCommentById);