const { getAttandances, postAttandanceOfMonth } = require("../controllers/attandanceController")
const { Router } = require("express")

const attandance = Router({ mergeParams: true })

attandance.get("/", getAttandances)
attandance.post("/month", postAttandanceOfMonth);

module.exports = attandance;
