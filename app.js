const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const imageRoute = require('./api/routes/images');


const app = express();
dotenv.config();


const mongoUri = process.env.ENV === 'DEV' ? process.env.MONGO_DEV_URI : process.env.MONGO_PROD_URI;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to database successfully.');
    }
})


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/images', imageRoute);

module.exports = app;