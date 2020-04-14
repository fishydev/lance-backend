var express = require('express');
var router = express.Router();

const jobController = require('../controllers/jobs');

// POST new account
router.post('/job/create', jobController.createJob);

router.get('/job/:id', jobController.getJob);

module.exports = router;
