var express = require('express');
var router = express.Router();

const userController = require('../controllers/users');

// POST new account
router.post('/create-user', userController.createUser);

// router.login('/:id', userController.login);

router.get('/:username', userController.getUser);

module.exports = router;
