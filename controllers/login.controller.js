const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.login = function (req, res) {
    loginCredential = User.findOne({username: req.body.username}, 'username password', function (err, user) {
        
        if (req.body.password == user.password) {
            res.send("Login Success")
        } else {
            res.send("Login Failed")
        }
        
        if (err) return next (err);
    })
}