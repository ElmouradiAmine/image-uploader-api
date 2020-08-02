const express = require("express");
const router = express.Router();
const errorController = require("../controllers/error");

router.use((req, res, next) => {
    errorController.handle_error(req, res, next);
});

module.exports = router;