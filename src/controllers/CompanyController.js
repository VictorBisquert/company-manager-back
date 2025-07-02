const CompanyModel = require("../models/CompanyModel");

const CompanyController = {

    //NOTE: TRAEMOS TODAS LAS COMPAÑIAS
    async getAllCompanysHandler(req, res) {
        try{
            const companys = await CompanyModel.getAllCompanys();
            res.status(200).json(companys);
        } catch (error){
            console.error(error);
            res.status(500).send("Error retrieving addresses");
        }
    },

    //NOTE: AQUI AÑADIMOS EL RESTO DEL CRUD
};

module.exports = CompanyController;