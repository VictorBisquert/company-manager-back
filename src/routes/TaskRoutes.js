const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/taskController");

router.get("/getAllTasks", TaskController.getAllTasks);
router.get("/getTaskById/:id", TaskController.getTaskById);
router.post("/createTask", TaskController.createTask);
router.put("/updateTask/:id", TaskController.updateTask);
router.delete("/deleteTask/:id", TaskController.deleteTask);

module.exports = router;
