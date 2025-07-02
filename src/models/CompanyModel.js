const pool = require("../config/config");

const CompanyModel = {
  //NOTE: TRAEMOS TODAS LAS COMPAÑIAS
  async getAllCompanys() {
    const query = "SELECT * FROM company";
    const [results] = await pool.execute(query);
    return results;
  },
  //NOTE: TRAEMOS UNA COMPAÑIA
  async getCompanyById(id) {
    const query = "SELECT * FROM company WHERE Id = ?";

    try {
      const [results] = await pool.execute(query, [id]);
      return results;
    } catch (error) {
      console.error("Error in getCompanyById:", error);
      throw error;
    }
  },
};

module.exports = CompanyModel;