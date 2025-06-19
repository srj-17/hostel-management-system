const { getPayments } = require("../controllers/paymentsController")
const { Router } = require("express")

const payment = Router({ mergeParams: true })

payment.get("/", getPayments)

module.exports = payment
