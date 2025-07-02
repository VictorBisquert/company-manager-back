const CompanyModel = require("../models/CompanyModel");

const CompanyController = {
  //NOTE: TRAEMOS TODAS LAS COMPAÑIAS
  async getAllCompanysHandler(req, res) {
    try {
      const companys = await CompanyModel.getAllCompanys();
      res.status(200).json(companys);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving addresses");
    }
  },

  //NOTE: TRAEMOS COMPAÑIA POR ID
  //Recogemos el id que pasamos a traves de la url
  //ejemplo: http://localhost:3000/api/company/1
  //pues recogemos el 1 que es el id de la compañia
  async getCompanyByIdHandler(req, res) {
    const { id } = req.params;

    try{
        const result = await CompanyModel.getCompanyById(id);

        if (result.length === 0) {
            res.status(404).send("Company not found");
        } else {
            res.status(200).json(result[0]);
        }

    } catch (error){
        console.error(error);
        res.status(500).send("Error retrieving company");
    }
  }

  //NOTE: AQUI AÑADIMOS EL RESTO DEL CRUD
};

module.exports = CompanyController;