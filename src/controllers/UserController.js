const UserModel = require("../models/usermodel");

const UserController = {

    // Obtener todos los usuarios
    async getAllUsers(req, res) {
        try {
            const users = await UserModel.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
            res.status(500).json({ message: "Error al obtener usuarios" });
        }
    },

    // Obtener un usuario por ID
    async getUserById(req, res) {
        try {
            const { id } = req.params;
            const user = await UserModel.getUserById(id);

            if (!user) {
                return res.status(404).json({ message: "Usuario no encontrado" });
            }

            res.status(200).json(user);
        } catch (error) {
            console.error("Error al obtener usuario:", error);
            res.status(500).json({ message: "Error al obtener usuario" });
        }
    },

    // Crear un nuevo usuario
    async createUser(req, res) {
        try {
            const userData = req.body;
            const newUser = await UserModel.createUser(userData);
            res.status(201).json(newUser);
        } catch (error) {
            console.error("Error al crear usuario:", error);
            res.status(500).json({ message: "Error al crear usuario" });
        }
    },

    // Actualizar un usuario existente
    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const userData = req.body;

            const updated = await UserModel.updateUser(id, userData);
            if (!updated) {
                return res.status(404).json({ message: "Usuario no encontrado" });
            }

            res.status(200).json({ message: "Usuario actualizado correctamente" });
        } catch (error) {
            console.error("Error al actualizar usuario:", error);
            res.status(500).json({ message: "Error al actualizar usuario" });
        }
    },

    // Eliminar un usuario
    async deleteUser(req, res) {
        try {
            const { id } = req.params;

            const deleted = await UserModel.deleteUser(id);
            if (!deleted) {
                return res.status(404).json({ message: "Usuario no encontrado" });
            }

            res.status(200).json({ message: "Usuario eliminado correctamente" });
        } catch (error) {
            console.error("Error al eliminar usuario:", error);
            res.status(500).json({ message: "Error al eliminar usuario" });
        }
    }
};

module.exports = UserController;
