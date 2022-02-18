const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { redirect } = require('express/lib/response');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
const bodyParser = require('body-parser');
const { json } = require('express');
const router = require('./routes/route')

mongoose.connect('mongodb://localhost:27017/Proj', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({ extended: false }))

// app.get('/loginSc', (req, res) => {

//     res.render('index.ejs');

// })

app.use('/',router)
app.listen(3000, () => {

    console.log("Server working on port [ 3000 ]");

})