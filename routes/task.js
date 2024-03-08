const express = require("express");
const taskController = require("../controllers/task");
const router = express.Router();
const auth = require("../middleware/auth")

/**
 *  SHOW TASKS
 */
router.get('/', auth , taskController.showTasks);

module.exports = router;