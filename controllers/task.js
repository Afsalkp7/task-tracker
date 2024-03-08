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

const addTasks = async (req, res) => {
    try {
        const { title, desc } = req.body;
        const userId = req.userId;
        const status = "Created";

        const newTask = await taskCollection.insertOne({ userId, title, desc, status });

        if (newTask.insertedCount > 0) {
            res.status(201).json({ message: "Task created successfully", task: newTask.ops[0] });
        } else {
            res.status(500).json({ message: "Failed to create task" });
        }
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
   showTasks,
   addTasks
  };