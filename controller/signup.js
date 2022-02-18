const userDB = require('../models/student');

module.exports =
{
    signup: (req, res) => {

        userDB.findOne({ email: req.body.email }).then((email) => {
            if (email) {

                return res.send("A user has been alraedy registered with the same Email");

            } else  {
                userDB.findOne({ uniNumber: req.body.uniNumber }).then((id) => {
                    if (id) {
                        return res.send("A user has been alraedy registered with the same ID");

                    } else {
                        const newUser = new userDB({
        
                            email: req.body.email,
                            name: req.body.name,
                            password: req.body.password,
                            uniNumber: req.body.uniNumber,
        
                        });
        
                        newUser.save();
                      
                        return res.send(newUser);
                    }
                })
                // create a new user of userDB 
            }
        })
    },
    home: (req, res) => {
        res.render('index.ejs');
    },
    gpa: (req, res) => {

        res.render('gpa.ejs');

    },
    vote: (req, res) => {

        res.render('vote.ejs');

    },
    login: (req, res) => {

        res.render('login.ejs')
    },
    register: (req, res) => {

        res.render('register.ejs')
    },


}