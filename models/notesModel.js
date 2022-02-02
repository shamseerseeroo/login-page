const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema(
    {
        noteTitle:{type: String},
        noteDescription:{type:String},
    },
    {
        timeseries:true
    }
);

module.exports = mongoose.model('notes', notesSchema);

