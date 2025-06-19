const { getBeds } = require("../controllers/bedsController")

const { Router } = express()
const bed = Router()

bed.get("/", getBeds)

module.exports = bed
