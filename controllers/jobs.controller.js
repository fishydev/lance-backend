const Job = require('../models/job.model');

exports.postJob = (req, res) => {
    let job = new Job (
        {
            title: req.body.title,
            category: req.body.category,
            desc: req.body.desc,
            freelancer: req.body.freelancer,
            fee: req.body.fee,
        }
    )

    job.save((err) => {
        if (err) {
            return next(err)
        } else {
            res.status(200).send({
                msg: 'Job added'
            })
        }
    })
}

exports.findJobById = (req, res) => {
    Job.findById({id: req.params.id}, (err, job) => {
        if (err) res.send(err)
        res.send(job)
    })
}

exports.findJobByTitle = (req, res) => {
    Job.find({title: new RegExp('.*' + req.params.q + '.*', "i")}, (err, jobs) => {
        if (err) res.send(err)
        res.status(200).send(jobs)
    })
}

exports.getJobList = (req, res) => {
    Job.find((err, job) => {
        if (err) res.send(err)
        res.status(200).send(job)
    })
}