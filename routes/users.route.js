var express = require('express');
var router = express.Router();

const userController = require('../controllers/users.controller');

// POST new account
router.post('/register/create', userController.register);

router.get('/:username', userController.getUser);

module.exports = router;
