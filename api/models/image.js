const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    createdAt: String,
    url: String,
});

module.exports = mongoose.model('Image', imageSchema);