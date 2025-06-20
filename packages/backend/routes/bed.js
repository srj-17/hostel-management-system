const {
    getBeds,
    getBedsByRoomId,
    putStudentInBed,
    postBedInRoom,
    getFreeBeds,
} = require("../controllers/bedsController")
const { Router } = require("express")

const beds = Router({ mergeParams: true })

beds.get("/", getBeds)
beds.get("/free", getFreeBeds)
beds.get("/:roomId", getBedsByRoomId)
beds.post("/:roomId", postBedInRoom)
beds.put("/:bedId/assign/:studentId", putStudentInBed)

module.exports = beds
