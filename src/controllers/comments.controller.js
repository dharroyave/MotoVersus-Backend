
//1. import dependencias y modulos necesarios
import { comentarioModel } from "../models/comments.model.js";

//Definir las aciones que van a realizar - CRUD

//1. Metodo para Crear un producto -> POST
export const postProduct = async (req, res) => {
    try {
        await comentarioModel.create(req.body);
        return res.status(201).json({
            "mensaje": "Comentario creado correctamente!"
        });

    } catch (error) {
        return res.status(400).json({
            "mensaje": "Ocurrio un error al crear el comentario!",
            "error": error.message || error
        })
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const allProducts = await comentarioModel.find().populate("usuario","nombre fotoPerfil");
        return res.status(200).json({
            "mensaje": "Se encontraron todos los comentarios!",
            "data": allProducts
        });
    } catch (error) {
        return res.status(500).json({
            "mensaje": "Ocurrio un error al mostrar los comentarios!",
            "error": error.message || error
        })
    }
};

export const putProductById = async (req, res) => {
      try {
        const idForUpdate = req.params.id;
        const dataForUpdate = req.body;
        await comentarioModel.findByIdAndUpdate(idForUpdate,dataForUpdate);
        return res.status(200).json({
            "mensaje": "Comentario actualizado correctamente!"
        });

    } catch (error) {
        return res.status(500).json({
            "mensaje": "Ocurrio un error al actualizar el comentario!",
            "error": error.message || error
        })
    }
}

export const deleteProductById = async(req, res) => {
      try {
        const idForDelet = req.params.id;
        await comentarioModel.findByIdAndDelete(idForDelet);
        return res.status(200).json({
            "mensaje": "Comentario eliminado correctamente!"
        });

    } catch (error) {
        res.status(400).json({
            "mensaje": "Ocurrio un error al eliminar el comentario!",
            "error": error.message || error
        })
    }
}