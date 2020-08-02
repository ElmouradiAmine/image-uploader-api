module.exports.get_all_images = (req, res, next) => {
    res.status(200).json({
        message: 'Get /images'
    })
}

module.exports.create_image = (req, res, next) => {
    res.status(200).json({
        message: 'POST /images'
    })
}

module.exports.update_image = (req, res, next) => {
    res.status(200).json({
        message: 'PUT /images'
    })
}

module.exports.delete_image = (req, res, next) => {
    res.status(200).json({
        message: 'DELETE /images'
    })
}