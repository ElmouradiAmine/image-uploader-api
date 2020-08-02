module.exports.handle_error = (req, res) => {
    res.status(500).json({
        message: 'An error has occured'
    })
}