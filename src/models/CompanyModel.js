const pool = require("../config/config");

const CompanyModel = {

    //NOTE: TRAEMOS TODAS LAS COMPAÑIAS
    async getAllCompanys(){
        const query = "SELECT * FROM company";
        const [results] = await pool.execute(query);
        return results;
    }
};

module.exports = CompanyModel;