var express = require('express');
var router = express.Router();

const jobController = require('../controllers/jobs.controller');

// POST new job
router.post('/create', jobController.createJob)

router.get('/search/:q', jobController.getJobList)

// router.get('/:id', jobController.findJobById)



module.exports = router;
