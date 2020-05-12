const Job = require('../models/job.model');

exports.createJob = (req, res) => {
    let job = new Job (
        {
            name: req.body.name,
            employer: req.body.employer,
            freelancer: "",
            startDate: Date(),
            deadline: req.body.deadline,
            fee: req.body.fee,
            completed: false,
            payment: {
                paymentDate: "",
                amount: ""
            },
            category: req.body.category
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

exports.findJobById = (req, res) => {
    Job.findById({id: req.params.id}, (err, job) => {
        if (err) res.send(err)
        res.send(job)
    })
}

exports.getJobList = (req, res) => {
    Job.find({name: req.params.q}, (err, job) => {
        if (err) res.send(err)
        res.send(job)
    })
}