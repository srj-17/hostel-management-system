const {
    getStudents,
    postStudents,
    getStudent,
    putStudent,
    deleteStudent,
} = require("../controllers/studentController")
const { Router } = require("express")

const students = Router({ mergeParams: true })

students.get("/", getStudents)
students.post("/", postStudents)
students.get("/:studentId", getStudent)
students.put("/:studentId", putStudent)
students.delete("/:studentId", deleteStudent)

module.exports = students
