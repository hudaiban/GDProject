const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const adminShema = new Schema({

    name: {
        type: String,
        required: true,

    },
    password: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    uniNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    date:{
        type:Date,
        default:Date.now,
    }

})


const Admin = mongoose.model('admin', adminShema);

module.exports = Admin;
console.log("The Admin works");