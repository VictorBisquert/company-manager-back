const pool = require("../config/config");

const InstallationModel = {

    // Obtener todas las instalaciones
    async getAllInstallations() {
        const query = "SELECT * FROM instalacion";
        const [results] = await pool.execute(query);
        return results;
    },

    // Obtener una instalación por ID
    async getInstallationById(id) {
        const query = "SELECT * FROM instalacion WHERE id = ?";
        const [results] = await pool.execute(query, [id]);
        return results[0];
    },

    // Crear una nueva instalación
    async createInstallation(installationData) {
        const { nombre, direccion, compania_id } = installationData;
        const query = "INSERT INTO instalacion (nombre, direccion, compania_id) VALUES (?, ?, ?)";
        const [result] = await pool.execute(query, [nombre, direccion, compania_id]);
        return { id: result.insertId, ...installationData };
    },

    // Actualizar una instalación existente
    async updateInstallation(id, installationData) {
        const { nombre, direccion, compania_id } = installationData;
        const query = "UPDATE instalacion SET nombre = ?, direccion = ?, compania_id = ? WHERE id = ?";
        const [result] = await pool.execute(query, [nombre, direccion, compania_id, id]);
        return result.affectedRows > 0;
    },

    // Eliminar una instalación
    async deleteInstallation(id) {
        const query = "DELETE FROM instalacion WHERE id = ?";
        const [result] = await pool.execute(query, [id]);
        return result.affectedRows > 0;
    }
};

module.exports = InstallationModel;
