const {
    getAttandances,
    getAttandanceByStudentId,
    postAttandanceOfCurrentMonth,
    putAttandance,
} = require("../controllers/attandanceController")
const { Router } = require("express")

const attandance = Router({ mergeParams: true })

attandance.get("/", getAttandances)
attandance.post("/month", postAttandanceOfCurrentMonth)
attandance.get("/:studentId", getAttandanceByStudentId)
attandance.put("/:studentId", putAttandance)

module.exports = attandance
