const express = require("express");
const router = express.Router();
const WorkerController = require("../controllers/workerController");

router.get("/getAllWorkers", WorkerController.getAllWorkers);
router.get("/getWorkerById/:id", WorkerController.getWorkerById);
router.post("/createWorker", WorkerController.createWorker);
router.put("/updateWorker/:id", WorkerController.updateWorker);
router.delete("/deleteWorker/:id", WorkerController.deleteWorker);

module.exports = router;
