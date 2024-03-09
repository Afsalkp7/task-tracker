const express = require("express");
const taskController = require("../controllers/task");
const {auth} = require("../middleware/auth")
const router = express.Router();


/**
 *  SHOW TASKS
 */
router.get('/', auth , taskController.showTasks);

/**
 * CREATE TASKS
 */
router.post("/",auth,taskController.addTasks)

/**
 * UPDATE TASKS
 */
router.put("/:id",taskController.updateTask)

/**
 * DELETE TASKS
 */
router.delete("/:id",taskController.deleteTasks)

module.exports = router;

