const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    status: {
      type: String,
    }
  });

const taskCollection = new mongoose.model("taskCollection", taskSchema);

module.exports = taskCollection;