const {
    getStudents,
    postStudents,
    getStudent,
    putStudent,
    deleteStudent,
} = require("../controllers/studentController")
const payments = require("./payments")
const { Router } = require("express")

const students = Router({ mergeParams: true })

students.get("/", getStudents)
students.post("/", postStudents)
students.get("/:studentId", getStudent)
students.put("/:studentId", putStudent)
students.delete("/:studentId", deleteStudent)
students.use("/:studentId/payments", payments)

module.exports = students
