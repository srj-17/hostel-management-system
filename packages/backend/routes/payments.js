const {
    getPayments,
    postPayments,
    getPayment,
    putPayment,
} = require("../controllers/paymentsController")
const { Router } = require("express")

const payments = Router({ mergeParams: true })

// get all payments of given studentId
payments.get("/", getPayments)

// get payment of given student for given month and year
// month and year should be passed in query params
payments.get("/date", getPayment)

// toggle payment status for current month
payments.put("/", putPayment)

// create payments of all students for the *current* month
payments.post("/month", postPayments)

module.exports = payments
