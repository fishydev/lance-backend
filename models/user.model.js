var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {type: String, required: true, maxlength: 30},
    email: {type: String, required: true, maxlength: 320},
    password: {type: String, required: true},
    university: {type: String, required: false},
    description: [
        {about: {type: String, maxlength: 300}},
        {language: {type: String}},
        {skill: {type: String}},
        {education: {type: String}},
        {certification: {type: String}}
    ]
});

module.exports = mongoose.model('User', userSchema);