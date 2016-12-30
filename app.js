var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = ('passport');
var Immobilier = require('./routes/immobilier');
var User = require('./routes/user');
var config = require('./config/database'); // get db config file
var cors = require('cors');
var morgan = require('morgan');

var app = express();

app.use(cors());
app.use(morgan('dev'));


mongoose.connect(config.database);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/api', Immobilier);
app.use('/api', User);



module.exports = app;
