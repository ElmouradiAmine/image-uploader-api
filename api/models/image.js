const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    title: {
        type: String,
        default: "",
    },
    description: {
        type: String,
        default: "",
    },
    createdAt: String,
    url: String,
});

module.exports = mongoose.model('Image', imageSchema);