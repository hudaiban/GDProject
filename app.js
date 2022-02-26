const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { redirect } = require('express/lib/response');
const bodyParser = require('body-parser');
const { json } = require('express');
const router = require('./routes/route');
const dotenv = require('dotenv');
const session = require('express-session');
const passport = require('passport');

//passport 
require('./config/passport')(passport);

dotenv.config({ path: "./config.env" });
// database connection 
mongoose.connect('mongodb://localhost:27017/Proj', { useNewUrlParser: true, useUnifiedTopology: true });

//          [ middlelware ]
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', router)

//       [ express session ] 
app.use(session({
    secret: 'dinosaur and fish',
    resave: true,
    saveUninitialized: true,
}))
app.use(passport.initialize());
app.use(passport.session())


const port = process.env.PORT || 8080;
//Check if server works 
app.listen(port, () => {
    console.log("Server working on port [3000]");

});
