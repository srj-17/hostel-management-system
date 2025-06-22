const {
    getPayments,
    postPayments,
    getPayment,
    putPayment,
} = require("../controllers/paymentsController")
const { Router } = require("express")

const payments = Router({ mergeParams: true })

/**
 * @swagger
 * /students/{studentId}/payments:
 *   get:
 *       summary: List all payments of given student
 *       tags: [Payments]
 *       parameters:
 *           - name: studentId
 *             in: path
 *             require: true
 *   responses:
 *       200:
 *           description: A list of payments of given student
 *           content:
 *               application/json
 *       500:
 *           description: Server error
 *           content:
 *               application/json
 */
payments.get("/", getPayments)

/**
 * @swagger
 * /students/{studentId}/payments/date:
 *   get:
 *       summary: payment of given student for this month and year
 *       tags: [Payments]
 *       parameters:
 *           - name: studentId
 *             in: path
 *             require: true
 *           - name: year
 *             in: query
 *             required: true
 *           - name: month
 *             in: query
 *             required: true
 *   responses:
 *       200:
 *           description: Payment for given student for given month and year
 *           content:
 *               application/json
 *       500:
 *           description: Server error
 *           content:
 *               application/json
 */
payments.get("/date", getPayment)

/**
 * @swagger
 * /students/{studentId}/payments:
 *   put:
 *       summary: Toggle payment status of given student for current month
 *       tags: [Payments]
 *
 *   responses:
 *       200:
 *           description: Toggle successful
 *           content:
 *               application/json
 *       500:
 *           description: Server error
 *           content:
 *               application/json
 */
payments.put("/", putPayment)

/**
 * @swagger
 * /payments:
 *   post:
 *       summary: Create payments of all students for the current month
 *       tags: [Payments]
 *
 *   responses:
 *       200:
 *           description: Created payment records
 *           content:
 *               application/json
 *       500:
 *           description: Server error
 */
payments.post("/month", postPayments)

module.exports = payments
