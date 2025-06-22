const {
    getAttandances,
    getAttandanceByStudentId,
    postAttandanceOfCurrentMonth,
    putAttandance,
} = require("../controllers/attandanceController")
const { Router } = require("express")

const attandances = Router({ mergeParams: true })

/**
 * @swagger
 * /attandances:
 *   get:
 *       summary: Get all attandances of all students for today
 *       tags: [Attandances]
 *   responses:
 *       200:
 *           description: A list of attandances of all students for today
 *           content:
 *               application/json
 *       500:
 *           description: Server error
 */
attandances.get("/", getAttandances)

/**
 * @swagger
 * /attandances/month:
 *   get:
 *       summary: Create attandance records for all the students for the current
 *                month
 *       tags: [Attandances]
 *   responses:
 *       200:
 *           description: Attandance creation successful message
 *           content:
 *               application/json
 *       500:
 *           description: Server error
 */
attandances.post("/month", postAttandanceOfCurrentMonth)

/**
 * @swagger
 * /attandances/{studentId}:
 *   get:
 *       summary: List of all attandances of given student for the whole month
 *       tags: [Attandances]
 *       parameters:
 *           - name: studentId
 *             in: path
 *             required: true
 *   responses:
 *       200:
 *           description: All attanandances for the given student for the given month
 *           content:
 *               application/json
 *       500:
 *           description: Server error
 */
attandances.get("/:studentId", getAttandanceByStudentId)
attandances.put("/:studentId", putAttandance)

module.exports = attandances
