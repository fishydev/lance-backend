const Job = require('../models/job.model');

exports.createJob = (req, res) => {
    let job = new Job (
        {
            name: req.body.name,
            employerId: req.body.employerId,
            startDate: Date(),
            deadline: req.body.deadline,
            fee: req.body.fee,
            completed: false,
            categoryId: req.body.categoryId
        }
    )

    job.save((err) => {
        if (err) {
            return next(err)
        } else {
            res.send("Job added")
        }
    })
}

exports.getJob = (req, res) => {
    Job.findById({id: req.params.id}, (err, job) => {
        if (err) return next(err)
        res.send(job)
    })
}