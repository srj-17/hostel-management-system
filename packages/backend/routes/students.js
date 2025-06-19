const {
    getStudents,
    postStudents,
    getStudent,
} = require("../controllers/studentController")
const { Router } = require("express")

const student = Router({ mergeParams: true })

student.get("/", getStudents)
student.post("/", postStudents)
student.get("/:studentId", getStudent)

module.exports = student
