const router = require('express').Router();
const controller = require('../controller/signup');


                // -- sign up -- //

router.post('/registerAccount',controller.signup);

// home page 

router.get('/',controller.home);
// GPA page
router.get('/gpa', controller.gpa);
// Vote page 
router.get('/vote', controller.vote);
// login page
router.get('/login', controller.login);
// register page 
router.get('/register', controller.register);








module.exports =router;