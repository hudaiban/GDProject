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
    email: {
        type: String,
        required: true,
    }

})



const Student = mongoose.model('Student', studentSchema);
module.exports = Student

console.log("The student works");