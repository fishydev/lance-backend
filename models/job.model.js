var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
    title: {type: String, required: true, maxlength: 30},
    desc: {type: String, required: true, maxlength: 512},
    category: {type: String, required: true},
    freelancer: {type: String, required: true, maxlength: 320},
    fee: {type: Number, required: true},
});

module.exports = mongoose.model('Job', jobSchema);