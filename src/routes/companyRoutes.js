const express = require("express");
const CompanyController = require("../controllers/CompanyController");

const router = express.Router();

//NOTE: TRAEMOS TODAS LAS COMPAÑIAS
router.get("/getAllCompanys", CompanyController.getAllCompanysHandler);

module.exports = router;