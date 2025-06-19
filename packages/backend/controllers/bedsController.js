function getBeds(req, res, next) {
    res.json({
        msg: "Beds are here",
    })
}

module.exports = {
    getBeds,
}
