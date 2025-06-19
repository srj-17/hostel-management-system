const { getAttandances } = require("../controllers/attandanceController")

const { Router } = express()
const attandance = Router()

attandance.get("/", getAttandances)

module.exports = attandance
