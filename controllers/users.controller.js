const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.register = (req, res) => {
    
    User.count({email: req.body.email}, (err, count) => {
        if (count > 0){
            res.send("Duplicate email found")
        } else {

            // TODO Encrypt password

            let user = new User (
                {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    university: req.body.university,
                }
            )

            user.save((err) => {
                if (err) {
                    return next(err)
                } else {
                    res.send("User created successfully");
                }
            })
        }
    })
}

exports.getUser = function (req, res) {
    User.findOne({username: req.params.username},'email username password', function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
}