const mongoose = require("mongoose");
const errorController = require('./error');
const Image = require("../models/image");

module.exports.get_all_images = (req, res, next) => {
    res.status(200).json({
        message: "Get /images",
    });
};

module.exports.create_image = (req, res, next) => {
    const image = new Image({
        title: req.body.title,
        description: req.body.description,
        createdAt: new Date(),
    });
    image
        .save()
        .then((result) => {
            res.status(201).json({
                message: "Image created successfully.",
                imageCreated: {
                    _id: result._id,
                    title: result.title,
                    createdAt: result.createdAt,
                },
                request: {
                    type: 'GET',
                    description: 'Get the image with specified id.',
                    url: req.get('host') + '/images/' + result._id
                }
            });
        })
        .catch((error) => {
            errorController.handle_error(req, res, next, error, 400);
        });


};

module.exports.update_image = (req, res, next) => {
    res.status(200).json({
        message: "PUT /images",
    });
};

module.exports.delete_image = (req, res, next) => {
    res.status(200).json({
        message: "DELETE /images",
    });
};