var express = require('express')
var router = express.Router()

const userController = require('../controllers/users.controller')

// POST new account
router.post('/register', userController.register)

router.get('/getProfile', userController.getProfile)

router.get('/checkLogin', userController.checkLogin)

module.exports = router
