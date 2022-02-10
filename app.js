const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { redirect } = require('express/lib/response');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
const dbStudent = require('./models/student');
const dbAdmin = require('./models/admin');
const bodyParser = require('body-parser');
const { json } = require('express');


mongoose.connect('mongodb://localhost:27017/Proj', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {

    res.render('index.ejs');

})


app.get('/gpa', (req, res) => {

    res.render('gpa.ejs');

})


app.get('/login', (req, res) => {

    res.render('login.ejs')
})



app.get('/register', (req, res) => {

    res.render('register.ejs')
})



app.post('/registerAccount', (req, res) => {


    dbStudent.findOne({ email: req.body.email, uniNumber: req.body.uniNumber }).then((e) => {
        if (e) {
            return res.send("A user has been alraedy registered with the same Email");

        } else if (e) {
            return res.send("A user has been alraedy registered with the same IDnumber");
        } else {
            // create a new user 
            const newUser = new dbStudent({
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                uniNumber: req.body.uniNumber

            });
            newUser.save()
            console.log(newUser);
            return res.send(newUser)
        }
    })
    
    
})

app.get('/loginSc', (req, res) => {

    res.render('index.ejs');

})


app.listen(3000, () => {

    console.log("Server working on port [ 3000 ]");

})