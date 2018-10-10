const express = require('express');
var router = express.Router();


var { Validators } = require('../models/validators');

router.post('/', (req, res) => {
    var val = new Validators({
        name: req.body.name,
        id: req.body.id,
        password: req.body.password,
        subjectsAssigned: req.body.subjectsAssigned,
    });
    console.log(val);
    val.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Validator Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;