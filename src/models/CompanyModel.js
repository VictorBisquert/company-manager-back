const pool = require("../config/config");

const CompanyModel = {
  //NOTE: TRAEMOS TODAS LAS COMPAÑIAS
  async getAllCompanys() {
    const query = "SELECT * FROM Compania";
    const [results] = await pool.execute(query);
    return results;
  },
  //NOTE: TRAEMOS UNA COMPAÑIA
  async getCompanyById(id) {
    const query = "SELECT * FROM Compania WHERE Id = ?";

    try {
      const [results] = await pool.execute(query, [id]);
      return results;
    } catch (error) {
      console.error("Error in getCompanyById:", error);
      throw error;
    }
  },
  //NOTE: CREAR COMPAÑIA
  async createCompany(companyData) {
    const checkCompanyQuery = "SELECT id FROM Compania WHERE nombre = ?";
    const InsertQuery =
      "INSERT INTO Compania (nombre, direccion, telefono) VALUES (?, ?, ?)";
      
    try{
      const [existing] = await pool.execute(checkCompanyQuery, [companyData.nombre]);
      
      if (existing.length > 0) {
        throw new Error("Ya existe una compañía con ese nombre.");
      }

      const [result] = await pool.execute(InsertQuery, [
        companyData.nombre,
        companyData.direccion,
        companyData.telefono,
      ]);

      return result;

    } catch (error) {
      console.error("Error in createCompany:", error);
      throw error;
    }
  }
};

module.exports = CompanyModel;