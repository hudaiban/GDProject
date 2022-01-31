const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { redirect } = require('express/lib/response');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
const dbStudent = require('./models/student');
const dbAdmin = require('./models/admin');


mongoose.connect('mongodb://localhost:27017/Proj', { useNewUrlParser: true, useUnifiedTopology: true });

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

    const user = new dbStudent(req.body);
  

    console.log(req.body);

    user.save()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
})

app.post('/loginSc', (req, res) => {

    res.render('index.ejs');

})


app.listen(3000, () => {

    console.log("Server working on port [ 3000 ]");

})