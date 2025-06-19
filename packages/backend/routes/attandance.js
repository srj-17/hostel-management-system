const { getAttandances } = require("../controllers/attandanceController")
const { Router } = require("express")

const attandance = Router({ mergeParams: true })

attandance.get("/", getAttandances)

module.exports = attandance
