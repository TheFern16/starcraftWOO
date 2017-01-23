// Modules

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var db = require('./config/db');
var port = process.env.PORT || 8080;
