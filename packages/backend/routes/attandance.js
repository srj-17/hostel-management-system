const {
    getAttandances,
    getAttandanceByStudentId,
    postAttandanceOfCurrentMonth,
    putAttandance,
} = require("../controllers/attandanceController")
const { Router } = require("express")

const attandances = Router({ mergeParams: true })

attandances.get("/", getAttandances)
attandances.post("/month", postAttandanceOfCurrentMonth)
attandances.get("/:studentId", getAttandanceByStudentId)
attandances.put("/:studentId", putAttandance)

module.exports = attandances
