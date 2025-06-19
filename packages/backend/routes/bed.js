const { getBeds } = require("../controllers/bedsController")
const { Router } = require("express")

const bed = Router({ mergeParams: true })

bed.get("/", getBeds)

module.exports = bed
