/**
 * @swagger
 * name: Students
 * description: Student management
 */
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

/**
 * @swagger
 * /students:
 *   get:
 *       summary: List of all students of hostel
 *       tags: [Students]
 *   responses:
 *       200:
 *           description: A list of students
 *           content:
 *               application/json
 *       500:
 *           description: Server error
 */
students.get("/", getStudents)

/**
 * @swagger
 * /students:
 *   post:
 *       summary: Create or Register a student in the hostel
 *       tags: [Students]
 *       requestBody:
 *           content:
 *               appplication/json:
 *                   schema:
 *                       type: object
 *                       properties:
 *                           firstName:
 *                               type: string
 *                           lastName:
 *                               type: string
 *                           email:
 *                               type: string
 *                           phone:
 *                               type: integer
 *                           address:
 *                               type: string
 *
 *   responses:
 *       200:
 *           description: Created student
 *           content:
 *               application/json
 *       500:
 *           description: Server error
 */
students.post("/", postStudents)

/**
 * @swagger
 * /students/{studentId}:
 *   get:
 *       summary: List of all students of hostel
 *       tags: [Students]
 *       parameters:
 *           - name: studentId
 *             in: path
 *             required: true
 *   responses:
 *       200:
 *           description: Student with given studentId
 *           content:
 *               application/json
 *       500:
 *           description: Server error
 */
students.get("/:studentId", getStudent)

/**
 * @swagger
 * /students/{studentId}:
 *   put:
 *       summary: Edit a student record
 *       tags: [Students]
 *       parameters:
 *           - name: studentId
 *             in: path
 *             required: true
 *       requestBody:
 *           content:
 *               appplication/json:
 *                   schema:
 *                       type: object
 *                       properties:
 *                           firstName:
 *                               type: string
 *                           lastName:
 *                               type: string
 *                           email:
 *                               type: string
 *                           phone:
 *                               type: integer
 *                           address:
 *                               type: string
 *
 *   responses:
 *       200:
 *           description: Edited the student record
 *           content:
 *               application/json
 *       500:
 *           description: Server error
 *           content:
 *               application/json
 */
students.put("/:studentId", putStudent)

/**
 * @swagger
 * /student/{studentId}:
 *   delete:
 *       summary: Delete a student
 *       tags: [Students]
 *       parameters:
 *           - name: studentId
 *             in: path
 *             required: true
 *   responses:
 *       200:
 *           description: Deleted student
 *           content:
 *               application/json
 *       500:
 *           description: Server error
 *           content:
 *               application/json
 */
students.delete("/:studentId", deleteStudent)
students.use("/:studentId/payments", payments)

module.exports = students
