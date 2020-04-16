const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.login = function (req, res) {
    User.count({email: req.body.email}, (err, count) => {
        if (count < 1) {
            res.send("Couldn't find any registered account with given email")
        } else {
            loginCredential = User.findOne({email: req.body.email}, 'email password', (err, user) => {
        
                bcrypt.compare(req.body.password, user.password, (err, same) => {
                    if (same) {
                        res.send("Login Success")
                    } else {
                        res.send("Wrong Password")
                    }
                })
                
                if (err) return next (err);
            })
        }
    })

    
}