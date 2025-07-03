const pool = require("../config/config");

const UserModel = {

    //NOTE: TRAEMOS TODAS LAS COMPAÑIAS
    async getAllUsers(){
        const query = "SELECT * FROM user";
        const [results] = await pool.execute(query);
        return results;
    },

    async getUserById(id) {
        const query = "SELECT * FROM user WHERE id = ?";
        const [results] = await pool.execute(query, [id]);
        return results[0];
    },

    async createUser(userData) {
        const { name, email, password } = userData;
        const query = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
        const [result] = await pool.execute(query, [name, email, password]);
        return { id: result.insertId, ...userData };
    },

     async updateUser(id, userData) {
        const { name, email, password } = userData;
        const query = "UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?";
        const [result] = await pool.execute(query, [name, email, password, id]);
        return result.affectedRows > 0;
    },

    async deleteUser(id) {
        const query = "DELETE FROM user WHERE id = ?";
        const [result] = await pool.execute(query, [id]);
        return result.affectedRows > 0;
    }
};

module.exports = UserModel;