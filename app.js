const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var contributorsController = require('./controllers/contributorsController.js');
var validatorsController = require('./controllers/validatorsController.js');
var coursesController = require('./controllers/coursesController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/validators', validatorsController);
app.use('/courses', coursesController);
app.use('/contributors', contributorsController);