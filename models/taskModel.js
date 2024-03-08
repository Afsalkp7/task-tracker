const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
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