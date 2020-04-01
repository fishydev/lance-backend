const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.createUser = function (req, res) {
    
    let user = new User (
        {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            university: req.body.university,
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User created successfully');
    })
}

exports.getUser = function (req, res) {
    User.findOne({username: req.params.username}, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })

}

// exports.login = function (req, res) {
//     user.findOne({username: req.body.username}, 'password', function (err, docs) {

//     })
// }