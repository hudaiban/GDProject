const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const studentSchema = new Schema({

    name: String,
    email: String,
    password: String

})



const Student = mongoose.model('Student', studentSchema);
module.exports = Student

console.log("The student works");