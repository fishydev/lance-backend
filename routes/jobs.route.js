var express = require('express');
var router = express.Router();

const jobController = require('../controllers/jobs.controller');

// POST new job
router.post('/post', jobController.postJob)

router.get('/:q', jobController.getJobList)

// router.get('/:id', jobController.findJobById)



module.exports = router;
