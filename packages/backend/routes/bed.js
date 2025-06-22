const {
    getBeds,
    getBedsByRoomId,
    putStudentInBed,
    postBedInRoom,
    getFreeBeds,
} = require("../controllers/bedsController")
const { Router } = require("express")

const beds = Router({ mergeParams: true })

/**
 * @swagger
 * /beds:
 *   get:
 *       summary: List of all students in all beds
 *       tags: [Beds]
 *   responses:
 *       200:
 *           description: A list of beds and students in each of them
 *           content:
 *               application/json
 *       500:
 *           description: Server error
 */
beds.get("/", getBeds)

/**
 * @swagger
 * /beds/free:
 *   get:
 *       summary: List of all free beds
 *       tags: [Beds]
 *   responses:
 *       200:
 *           description: A list of free beds in the hostel
 *           content:
 *               application/json
 *       500:
 *           description: Server error
 */
beds.get("/free", getFreeBeds)

/**
 * @swagger
 * /beds/{roomId}:
 *   get:
 *       summary: List of all beds in the given room
 *       tags: [Beds]
 *       parameters:
 *           - in: path
 *             name: roomId
 *             required: true
 *   responses:
 *       200:
 *           description: A list of beds in the given room
 *           content:
 *               application/json
 *       500:
 *           description: Server error
 */
beds.get("/:roomId", getBedsByRoomId)

/**
 * @swagger
 * /beds/{roomId}:
 *   post:
 *       summary: Create an empty bed in the given room
 *       tags: [Beds]
 *       parameters:
 *           - in: path
 *             name: roomId
 *             required: true
 *   responses:
 *       200:
 *           description: Created a bed in the given roomId
 *           content:
 *               application/json
 *       500:
 *           description: Server error
 */
beds.post("/:roomId", postBedInRoom)

/**
 * @swagger
 * /beds/{bedId}/assign/{studentId}:
 *   put:
 *       summary: Assign a student in the given bed
 *       tags: [Beds]
 *       parameters:
 *           - name: bedId
 *             in: path
 *             required: true
 *           - name: studentId
 *             in: path
 *             required: true
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
beds.put("/:bedId/assign/:studentId", putStudentInBed)

module.exports = beds
