const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const config = require('../config')

const saltRounds = 10;

exports.login = (req, res) => {
    User.count({email: req.body.email}, (err, count) => {
        if (count < 1) {
            res.status(404).send("Couldn't find any registered account with given email")
        } else {
            loginCredential = User.findOne({email: req.body.email}, 'email password', (err, user) => {
        
                bcrypt.compare(req.body.password, user.password, (err, same) => {
                    if (same) {
                        let token = jwt.sign({ username: user.username }, config.secret, {
                            expiresIn: 86400
                        })
                        
                        res.status(200).send({ auth: true, token: token, message: 'Logged in' })
                    } else {
                        res.status(401).send({ auth: false, token: null, message: 'Wrong Password' })
                    }
                })
                
                if (err) return next (err);
            })
        }
    })
}