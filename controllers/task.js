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

/*
 * ADD TASKS
 */
const addTasks = async (req, res) => {
    try {
        const { title, desc } = req.body;
        const userId = req.userId;
        const status = "Created";

        const newTask = new taskCollection({ userId, title, desc, status });
          const savedTask = await newTask.save();
          console.log(savedTask);
          res.status(200).json(savedTask);
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

/**
 * TASK UPDATE
 */
const updateTask = async (req,res) => {
    const taskId = req.params.id;
    const { title, desc, status } = req.body;
    try {
        const updatedTask = await taskCollection.updateOne({_id:taskId},{$set:{
            status
        }})
        if(updatedTask){
            const userId = req.userId;
            const tasks = await taskCollection.find({userId})
            res.json(tasks)
        }else{
            res.json({message:"can't update"})
        }
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ message: "Internal server error" });
    }
   
}

/**
 * TASK DELETE
 */


const deleteTasks = async (req,res) => {
    const taskId = req.params.id;
    const deletedTask = await taskCollection.deleteOne({_id:taskId})
    if(deletedTask){
        const userId = req.userId;
        const tasks = await taskCollection.find({userId})
        res.json(tasks)
    }else{
        res.json({message:"can't delete"})
    }
}

module.exports = {
   showTasks,
   addTasks,
   deleteTasks,
   updateTask
  };