const mongoose = require('mongoose');

var Validators = mongoose.model('validators', {
    name: { type: String },
    id: { type: Number },
    subjectsAssigned: { type: String },
    password: { type: String }
});

module.exports = { Validators };