const express = require('express');
var router = express.Router();


var { Contributors } = require('../models/contributors');

router.post('/', (req, res) => {
    var cont = new Contributors({
        name: req.body.name,
        id: req.body.id,
        password: req.body.password,
        subjectsAssigned: req.body.subjectsAssigned,
    });
    console.log(cont);
    cont.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
