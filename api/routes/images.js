const express = require('express');
const router = express.Router();
const imagesController = require('../controllers/images')


//This router is prefixed by /images
router.get('/', imagesController.get_all_images);
router.post('/', imagesController.create_image);
router.put('/:imageId', imagesController.update_image);
router.delete('/:imageId', imagesController.delete_image);

module.exports = router;