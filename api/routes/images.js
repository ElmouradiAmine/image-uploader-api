const express = require("express");
const router = express.Router();
var path = require('path');

const imagesController = require("../controllers/images");

const multer = require("multer");

const storage = multer.diskStorage({
    destination: path.dirname(require.main.filename) + "/upload/images",
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilterFunction = (req, file, cb) => {
    //reject a file
    console.log(file.mimetype)
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
        cb(null, true);
    else {
        cb(null, false);

    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,

    },
    fileFilter: fileFilterFunction
});

//This router is prefixed by /images
router.get("/", imagesController.get_all_images);
router.post("/", upload.single("image"), imagesController.create_image);
router.get("/:imageId", imagesController.get_image);
router.patch("/:imageId", imagesController.update_image);
router.delete("/:imageId", imagesController.delete_image);

module.exports = router;