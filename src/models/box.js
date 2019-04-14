const mongoose = require('mongoose');

const Box = new mongoose.Schema({
    title: {
      type: String,
      required: true  
    },
    // armazena os ids dos files
    files: [
        {type: mongoose.Schema.Types.ObjectId, ref: "File"}
    ]
}, { timestamps: true });

module.exports = mongoose.model('Box', Box);