var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
    name: {type: String, required: true, maxlength: 30},
    employer: {type: String, required: true, maxlength: 320},
    freelancer: {type: String},
    startDate: {type: Date, required: true},
    deadline: {type: Date},
    fee: {type: Number, required: true},
    completed: {type: Boolean, required: true},
    payment: {
        paymentDate: {type: Date},
        amount: {type: Number}
    },
    category: {type: String, required: true},
});

module.exports = mongoose.model('Job', jobSchema);