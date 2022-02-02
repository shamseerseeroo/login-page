const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        userName:{type: String},
        userPhone:{type:String},
        passWord:{type:String}
    },
    {
        timeseries:true
    }
);

module.exports = mongoose.model('user', userSchema);

