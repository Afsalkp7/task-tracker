const express = require("express");
const taskController = require("../controllers/task");
const {auth} = require("../middleware/auth")
const router = express.Router();


/**
 *  SHOW TASKS
 */
router.get('/', auth , taskController.showTasks);

module.exports = router;

