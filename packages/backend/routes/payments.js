const { getPayments } = require("../controllers/paymentsController")
const { Router } = require("express")

const payments = Router({ mergeParams: true })

payments.get("/", getPayments)

module.exports = payments
