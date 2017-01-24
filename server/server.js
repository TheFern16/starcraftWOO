// We will use these modules

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

// Shipping out of this port

var db = require('./config/db.js');
var port = process.env.PORT || 8080;

// Mongoose time

mongoose.connect(db.url);

// Ugly Parse Middleware 'its parsin time'

app.use(bodyParser.json());
app.use(bodyParser.json( { type: 'application/vnd.api+json' } ));
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static('./public'));

// ROUTE ME BRO

require('./routes.js')

// Listen to me

app.listen(port);
console.log("I am listening");

exports = module.exports = app;


