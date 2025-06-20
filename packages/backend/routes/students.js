const {
    getStudents,
    postStudents,
    getStudent,
    putStudent,
    deleteStudent
} = require("../controllers/studentController")
const { Router } = require("express")

const student = Router({ mergeParams: true })

student.get("/", getStudents)
student.post("/", postStudents)
student.get("/:studentId", getStudent)
student.put("/:studentId", putStudent)
student.delete("/:studentId", deleteStudent)

module.exports = student
