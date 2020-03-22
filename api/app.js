var express = require('express')
var cors = require('cors');
var app = express();

app.use(cors());

const route = require('./routes/twitter-route');
app.use(express.json());
app.use('/api/v1/twitter', route);

module.exports = app;