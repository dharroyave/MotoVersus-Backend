import { usuarioModel } from "../models/users.model.js";
import bcryptjs from "bcryptjs";

// 1. Crear un usuario (POST)
export const potUsers = async (request, response) => {
    try {
        //validar que venga el archivo enviado por el cliente
        if (!request.file) {
            return response.status(400).json({
                "mensaje": "Debes subir un archivo de imagen"
            });
        };

        const codedPassword = await bcryptjs.hash(request.body.contrasena, 10);

        // crear el nuevo usuario con la contraseña encriptada
        const newUser = {
            ...request.body,
            contrasena: codedPassword,
            fotoPerfil: `/uploads/${request.file.filename}`,
        };

        await usuarioModel.create(newUser)
        return response.status(201).json({
            "mensaje": "Usuario creado correctamente"
        });

    } catch (error) {
        return response.status(400).json({
            "mensaje": "ocurrio un error al crear el usuario",
            "error": error.message || error
        });
    }
};

// 2. Obtener todos los usuarios (GET)
export const getAllUsers = async (request, response) => {
    try {
        const allUsers = await usuarioModel.find();
        return response.status(200).json({
            "mensaje": "Petición Exitosa",
            "data": allUsers
        });

    } catch (error) {
        return response.status(400).json({
            "mensaje": "ocurrio un error al mostrar los usuarios",
            "error": error.message || error
        });
    }
};

//2.1 Obtener un usuario por ID (GET)
export const getUserById = async (request, response) => {
    try {
        const idForSearch = request.params.id;
        const userById = await usuarioModel.findById(idForSearch).select('-contrasena');
        return response.status(200).json({
            "mensaje": "Petición Exitosa",
            "data": userById
        });
    } catch (error) {
        return response.status(400).json({
            "mensaje": "ocurrio un error al mostrar el usuario",
            "error": error.message || error
        });
    }
};
// 3. Actualizar un usuario por ID (PUT)
export const putUserById = async (request, response) => {
    try {
        //validar que venga el archivo enviado por el cliente
        if (!request.file) {
            return response.status(400).json({
                "mensaje": "Debes subir un archivo de imagen"
            });
        };

        const codedPassword = await bcryptjs.hash(request.body.contrasena, 10);

        // crear el nuevo usuario con la contraseña encriptada
        const newUser = {
            ...request.body,
            contrasena: codedPassword,
            fotoPerfil: `/uploads/${request.file.filename}`,
        };

        const idForUpdate = request.params.id;
        await usuarioModel.findByIdAndUpdate(idForUpdate, { nombre, apellido, user, contrasena: codedPassword, correo, numero, fotoPerfil, role });
        return response.status(200).json({
            "mensaje": "Usuario actualizado correctamente"
        });
    } catch (error) {
        return response.status(400).json({
            "mensaje": "ocurrio un error al actualizar usuario",
            "error": error.message || error
        });
    }
};

// 4. Eliminar un usuario por ID (DELETE)
export const deleteUserById = async (request, response) => {
    try {
        const idForDelete = request.params.id;
        await usuarioModel.findByIdAndDelete(idForDelete);
        return response.status(200).json({
            "mensaje": "Usuario eliminado correctamente"
        });
    } catch (error) {
        return response.status(400).json({
            "mensaje": "ocurrio un error al eliminar usuario",
            "error": error.message || error
        });
    }
};