const pool = require("../config/config");

const WorkerModel = {

    //NOTE: TRAEMOS TODAS LAS COMPAÑIAS
    async getAllWorkers(){
        const query = "SELECT * FROM trabajador";
        const [results] = await pool.execute(query);
        return results;
    },

    async getWorkerById(id) {
        const query = "SELECT * FROM trabajador WHERE id = ?";
        const [results] = await pool.execute(query, [id]);
        return results[0];
    },

    async createWorker(workerData) {
        const { name, email, role } = workerData;
        const query = "INSERT INTO trabajador (nombre, email, puesto) VALUES (?, ?, ?)";
        const [result] = await pool.execute(query, [name, email, role]);
        return { id: result.insertId, ...workerData };
    },

     async updateWorker(id, workerData) {
        const { name, email, role } = workerData;
        const query = "UPDATE trabajador SET nombre = ?, email = ?, puesto = ? WHERE id = ?";
        const [result] = await pool.execute(query, [name, email, role, id]);
        return result.affectedRows > 0;
    },

    async deleteWorker(id) {
        const query = "DELETE FROM trabajador WHERE id = ?";
        const [result] = await pool.execute(query, [id]);
        return result.affectedRows > 0;
    }
};

module.exports = WorkerModel;