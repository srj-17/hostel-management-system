function getPayments(req, res, next) {
    res.json({
        msg: "Here are the payments",
    })
}

function postPayment(req, res, next) {}

module.exports = {
    getPayments,
}
