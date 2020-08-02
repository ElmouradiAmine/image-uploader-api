const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdAt: String,
    url: String,
});

module.export = mongoose.model('Image', imageSchema);