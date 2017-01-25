// We will use these modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var morgan = require('morgan');
var path = require('path');
var Q = require('q');
process.setMaxListeners(0);

// Shipping out of this port

var db = require('./config/db.js');
var port = process.env.PORT || 8000;

// mongoose.connect('mongodb://localhost/starCraftWoo');

// app.on(Load seeder file)

app.use(morgan());

app.use(express.static('./client'));
app.use(bodyParser.json());
app.use(bodyParser.json( { type: 'application/vnd.api+json' } ));
app.use(methodOverride('X-HTTP-Method-Override'));

// ROUTE ME BRO

require('./routes/routes.js')(app, express);

// Listen to me

app.listen(8000);
console.log("I am listening");

module.exports = app;


