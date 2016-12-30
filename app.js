var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = ('passport');
var immobiliers = require('./routes/immobilier');
var User = require('./routes/user');
var config = require('./config/database'); // get db config file
var cors = require('cors');
var morgan = require('morgan');

var app = express();
/*app.use(passport.initialize());
app.use(passport.authenticate('jwt', opts));*/

app.use(cors());
// pass passport for configuration

// log to console
app.use(morgan('dev'));


//*****************DB CONNECTION********************************
/*var dbName = 'dbimmobilier';
var connectionString = 'mongodb://localhost:27017/' + dbName;
mongoose.connect(connectionString);*/
mongoose.connect(config.database);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/api', immobiliers);
app.use('/api', User);



module.exports = app;
