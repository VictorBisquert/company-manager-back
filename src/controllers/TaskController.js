const TaskModel = require("../models/taskmodel");

const TaskController = {

    // Obtener todas las tareas
    async getAllTasks(req, res) {
        try {
            const tasks = await TaskModel.getAllTasks();
            res.status(200).json(tasks);
        } catch (error) {
            console.error("Error al obtener tareas:", error);
            res.status(500).json({ message: "Error al obtener tareas" });
        }
    },

    // Obtener una tarea por ID
    async getTaskById(req, res) {
        try {
            const { id } = req.params;
            const task = await TaskModel.getTaskById(id);

            if (!task) {
                return res.status(404).json({ message: "Tarea no encontrada" });
            }

            res.status(200).json(task);
        } catch (error) {
            console.error("Error al obtener tarea:", error);
            res.status(500).json({ message: "Error al obtener tarea" });
        }
    },

    // Crear una nueva tarea
    async createTask(req, res) {
        try {
            const taskData = req.body;
            const newTask = await TaskModel.createTask(taskData);
            res.status(201).json(newTask);
        } catch (error) {
            console.error("Error al crear tarea:", error);
            res.status(500).json({ message: "Error al crear tarea" });
        }
    },

    // Actualizar una tarea existente
    async updateTask(req, res) {
        try {
            const { id } = req.params;
            const taskData = req.body;

            const updated = await TaskModel.updateTask(id, taskData);
            if (!updated) {
                return res.status(404).json({ message: "Tarea no encontrada" });
            }

            res.status(200).json({ message: "Tarea actualizada correctamente" });
        } catch (error) {
            console.error("Error al actualizar tarea:", error);
            res.status(500).json({ message: "Error al actualizar tarea" });
        }
    },

    // Eliminar una tarea
    async deleteTask(req, res) {
        try {
            const { id } = req.params;

            const deleted = await TaskModel.deleteTask(id);
            if (!deleted) {
                return res.status(404).json({ message: "Tarea no encontrada" });
            }

            res.status(200).json({ message: "Tarea eliminada correctamente" });
        } catch (error) {
            console.error("Error al eliminar tarea:", error);
            res.status(500).json({ message: "Error al eliminar tarea" });
        }
    }
};

module.exports = TaskController;
