const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const imageRoute = require('./api/routes/images');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/images', imageRoute);

module.exports = app;