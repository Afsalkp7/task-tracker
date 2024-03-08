const mongoose = require("mongoose");
const taskCollection = require("../models/taskModel");
/**
 * SHOW TASKS
 */
const showTasks = async (req,res) =>{
    const userId = req.userId;
    const tasks = await taskCollection.find({userId})
    res.json(tasks)
}

module.exports = {
   showTasks
  };