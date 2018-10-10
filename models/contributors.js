const mongoose = require('mongoose');

var Contributors = mongoose.model('contributors', {
    name: { type: String },
    id: { type: Number },
    subjectsAssigned: { type: String },
    password: { type: String }
});

module.exports = { Contributors };