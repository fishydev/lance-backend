const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const config = require('../config')

const saltRounds = 10;

exports.register = (req, res) => {
    
    User.count({email: req.body.email}, (err, count) => {
        if (count > 0){
            res.send({ status: 500, msg: 'Duplicate email found'})
        } else {
            bcrypt.genSalt(saltRounds, (err, salt) => {
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                    let user = new User (
                        {
                            username: req.body.username,
                            email: req.body.email,
                            password: hash
                        }
                    )
        
                    user.save((err) => {
                        if (err) {
                            res.status(500).send({ err, msg: 'Failed'})
                        } else {
                            let token = jwt.sign({ id: user.username }, config.secret, {
                                expiresIn: 86400
                            })
                            res.status(200).send({ auth: true, token: token, msg: "Success"})
                        }
                    })
                })
            })
        }
    })
}

exports.getProfile = (req, res) => {
    let token = req.headers['x-access-token']
    if (!token) return res.status(201).send({ auth: false, message: 'No token provided' })

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token' })

        res.status(200).send(decoded)
    })
}

exports.checkLogin = (req, res) => {
    let token = req.headers['x-access-token']
    if (!token) return res.status(201).send({ auth: false, message: 'No token provided' })

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token' })

        res.status(200).send(decoded)
    })
}