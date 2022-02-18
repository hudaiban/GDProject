const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const studentSchema = new Schema({

    name: {
        type: String,
        required: true,


    },
    password: {
        type: Number,
        required: true

    },
    uniNumber: {
        type: Number,
        required: true,
        unique: true,
     

    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    date: {
        type: Date,
        default: Date.now,
    }
})



const Student = mongoose.model('Student', studentSchema);
module.exports = Student

console.log("The student works");