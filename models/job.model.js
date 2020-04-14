var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
    name: {type: String, required: true, maxlength: 30},
    employerId: {type: String, required: true, maxlength: 320},
    freelancerId: {type: String},
    startDate: {type: Date, required: true},
    deadline: {type: Date, required: true},
    fee: {type: Int32Array, required: true},
    completed: {type: Boolean, required: true},
    categoryId: {type: String, required: true},
});

module.exports = mongoose.model('User', userSchema);