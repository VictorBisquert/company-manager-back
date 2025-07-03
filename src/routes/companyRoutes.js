const express = require("express");
const CompanyController = require("../controllers/CompanyController");

const router = express.Router();

//NOTE: TRAEMOS TODAS LAS COMPAÑIAS
router.get("/getAllCompanys", CompanyController.getAllCompanysHandler);
router.get("/getCompanyById/:id", CompanyController.getCompanyByIdHandler);
router.post("/create", CompanyController.createCompanyHandler);

