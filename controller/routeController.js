
module.exports =
{
    
    home: (req, res) => {
        res.render('index.ejs');
    },
    gpa: (req, res) => {

        res.render('gpa.ejs');

    },
    planner: (req, res) => {

        res.render('planner.ejs')
    },
    vote: (req, res) => {

        res.render('vote.ejs');

    },
    login: (req, res) => {

        res.render('login.ejs')
    },
     relogin: (req, res) => {

        res.render('relogin.ejs')
    },
    register: (req, res) => {

        res.render('register.ejs')
    },


}