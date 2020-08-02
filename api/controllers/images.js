const mongoose = require("mongoose");
const errorController = require("./error");

const Image = require("../models/image");

module.exports.get_all_images = (req, res, next) => {
    Image.find()
        .select("-__v")
        .exec()
        .then((docs) => {
            res.status(200).json({
                count: docs.length,
                images: docs,
            });
        })
        .catch((error) => {
            errorController.handle_error(req, res, next, error, 500);
        });
};

module.exports.get_image = (req, res, next) => {
    const id = req.params.imageId;
    Image.findById(id)
        .select("-__v")
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            errorController.handle_error(req, res, next, error, 500);
        });
};

module.exports.create_image = (req, res, next) => {
    console.log(req.body.image);
    console.log(req.file);
    const image = new Image({
        title: req.body.title,
        description: req.body.description,
        createdAt: new Date(),
        url: req.get("host") + "/upload/images/" + req.file.filename,
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
                    url: result.url,
                },
                request: {
                    type: "GET",
                    description: "Get the image with specified id.",
                    url: "https://" + req.get("host") + "/images/" + result._id,
                },
            });
        })
        .catch((error) => {
            //A validation error
            errorController.handle_error(req, res, next, error, 400);
        });
};

module.exports.update_image = (req, res, next) => {
    const id = req.params.imageId;
    const image = {
        title: req.body.title,
        description: req.body.description,
    };
    Image.update({ _id: id }, { $set: {...image } })
        .exec()
        .then((result) => {
            res.status(200).json({
                message: "Image updated successfully.",
                request: {
                    type: "GET",
                    description: "Get the image with specified id.",
                    url: req.get("host") + "/images/" + id,
                },
            });
        })
        .catch((error) => {
            errorController.handle_error(req, res, next, error, 500);
        });
};

module.exports.delete_image = (req, res, next) => {
    const id = req.params.imageId;
    Image.remove({ _id: id })
        .exec()
        .then((result) => {
            res.status(200).json({
                message: "Image deleted successfully.",
                request: {
                    type: "GET",
                    description: "Get the  all the images.",
                    url: req.get("host") + "/images",
                },
            });
        })
        .catch((error) => {
            errorController.handle_error(req, res, next, error, 500);
        });
};