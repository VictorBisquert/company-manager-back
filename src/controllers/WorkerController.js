const WorkerModel = require("../models/workermodel");

const WorkerController = {

    // Obtener todos los trabajadores
    async getAllWorkers(req, res) {
        try {
            const workers = await WorkerModel.getAllWorkers();
            res.status(200).json(workers);
        } catch (error) {
            console.error("Error al obtener trabajadores:", error);
            res.status(500).json({ message: "Error al obtener trabajadores" });
        }
    },

    // Obtener un trabajador por ID
    async getWorkerById(req, res) {
        try {
            const { id } = req.params;
            const worker = await WorkerModel.getWorkerById(id);

            if (!worker) {
                return res.status(404).json({ message: "Trabajador no encontrado" });
            }

            res.status(200).json(worker);
        } catch (error) {
            console.error("Error al obtener trabajador:", error);
            res.status(500).json({ message: "Error al obtener trabajador" });
        }
    },

    // Crear un nuevo trabajador
    async createWorker(req, res) {
        try {
            const workerData = req.body;
            const newWorker = await WorkerModel.createWorker(workerData);
            res.status(201).json(newWorker);
        } catch (error) {
            console.error("Error al crear trabajador:", error);
            res.status(500).json({ message: "Error al crear trabajador" });
        }
    },

    // Actualizar un trabajador existente
    async updateWorker(req, res) {
        try {
            const { id } = req.params;
            const workerData = req.body;

            const updated = await WorkerModel.updateWorker(id, workerData);
            if (!updated) {
                return res.status(404).json({ message: "Trabajador no encontrado" });
            }

            res.status(200).json({ message: "Trabajador actualizado correctamente" });
        } catch (error) {
            console.error("Error al actualizar trabajador:", error);
            res.status(500).json({ message: "Error al actualizar trabajador" });
        }
    },

    // Eliminar un trabajador
    async deleteWorker(req, res) {
        try {
            const { id } = req.params;

            const deleted = await WorkerModel.deleteWorker(id);
            if (!deleted) {
                return res.status(404).json({ message: "Trabajador no encontrado" });
            }

            res.status(200).json({ message: "Trabajador eliminado correctamente" });
        } catch (error) {
            console.error("Error al eliminar trabajador:", error);
            res.status(500).json({ message: "Error al eliminar trabajador" });
        }
    }
};

module.exports = WorkerController;
