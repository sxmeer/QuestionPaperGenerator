const mongoose = require('mongoose');

var Courses = mongoose.model('courses', {
    subName: { type: String },
    subId: { type: Number },
    sem: { type: Number },
    dept: { type: String },
    marksType: { type: Array },
    numberOfModules: { type: Number },
    moduleDetails: { type: Array }
});

module.exports = { Courses };