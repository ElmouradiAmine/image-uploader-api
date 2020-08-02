module.exports.handle_error = (req, res, next, error, code) => {
    if (error) {
        res.status(code || 500).json({
            error: error,
            message: 'An error has occured',
        })
    } else {
        res.status(500).json({
            message: 'An error has occured'
        });
    }

}