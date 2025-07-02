const pool = require("../config/config");

const CompanyModel = {

    //NOTE: TRAEMOS TODAS LAS COMPAÑIAS
    async getAllUsers(){
        const query = "SELECT * FROM user";
        const [results] = await pool.execute(query);
        return results;
    }
};

module.exports = CompanyModel;