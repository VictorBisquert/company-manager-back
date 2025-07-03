const pool = require("../config/config");

const TaskModel = {

    // Obtener todas las tareas
    async getAllTasks() {
        const query = "SELECT * FROM tarea";
        const [results] = await pool.execute(query);
        return results;
    },

    // Obtener una tarea por ID
    async getTaskById(id) {
        const query = "SELECT * FROM tarea WHERE id = ?";
        const [results] = await pool.execute(query, [id]);
        return results[0];
    },

    // Crear una nueva tarea
    async createTask(taskData) {
        const { titulo, descripcion, trabajador_id } = taskData;
        const query = "INSERT INTO tarea (titulo, descripcion, trabajador_id) VALUES (?, ?, ?)";
        const [result] = await pool.execute(query, [titulo, descripcion, trabajador_id]);
        return { id: result.insertId, ...taskData };
    },

    // Actualizar una tarea existente
    async updateTask(id, taskData) {
        const { titulo, descripcion, trabajador_id } = taskData;
        const query = "UPDATE tarea SET titulo = ?, descripcion = ?, trabajador_id = ? WHERE id = ?";
        const [result] = await pool.execute(query, [titulo, descripcion, trabajador_id, id]);
        return result.affectedRows > 0;
    },

    // Eliminar una tarea
    async deleteTask(id) {
        const query = "DELETE FROM tarea WHERE id = ?";
        const [result] = await pool.execute(query, [id]);
        return result.affectedRows > 0;
    }
};

module.exports = TaskModel;