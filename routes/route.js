const router = require('express').Router();
const routecontroller = require('../controller/routeController');
const auth = require('../controller/authController');
const { route } = require('express/lib/router');


// -- sign up -- //

router.post('/register', auth.signup);
// -- Login -- //
router.post('/login', auth.login);



// home page 
router.get('/', routecontroller.home);
// GPA page
router.get('/gpa', routecontroller.gpa);
// planner page 
router.get('/planner', routecontroller.planner)
// Vote page 
router.get('/vote', routecontroller.vote);
// login page
router.get('/login', routecontroller.login);
// register page 
router.get('/register', routecontroller.register);
// relogin 
router.get('/relogin', routecontroller.relogin)


module.exports = router;