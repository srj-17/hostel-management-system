const { getBeds, getBedsByRoomId, putStudentInBed, postBedInRoom, getFreeBeds } = require("../controllers/bedsController")
const { Router } = require("express")

const bed = Router({ mergeParams: true })

bed.get("/", getBeds)
bed.get("/free", getFreeBeds)
bed.get("/:roomId", getBedsByRoomId)
bed.post("/:roomId", postBedInRoom);
bed.put("/:bedId/assign/:studentId", putStudentInBed);

module.exports = bed
