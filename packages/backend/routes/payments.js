const { getPayments } = require("../controllers/paymentsController")

const { Router } = express()
const payment = Router()

payment.get("/", getPayments)

module.exports = payment
