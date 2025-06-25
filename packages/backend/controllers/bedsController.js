const BadRequestError = require("../customErrors/BadRequestError")
const InternalServerError = require("../customErrors/InternalServerError")

const db = require("../models")

async function getBeds(req, res, next) {
    try {
        const beds = await db.bed.findMany({
            include: {
                student: true,
            },
        })

        res.json(beds)
    } catch (e) {
        console.error(e)
        throw new InternalServerError("Bed information could not be fetched")
    }
}

async function getBedsByRoomId(req, res, next) {
    const { roomId } = req.params

    try {
        const beds = await db.bed.findMany({
            where: {
                roomId: +roomId,
            },
        })

        res.json(beds)
    } catch (e) {
        console.error(e)
        throw new InternalServerError("Beds information could not be fetched")
    }
}

async function putStudentInBed(req, res, next) {
    const { studentId, bedId } = req.params
    try {
        const bed = await db.bed.update({
            where: {
                id: +bedId,
            },
            data: {
                studentId: +studentId,
            },
        })

        res.json(bed)
    } catch (e) {
        console.error(e)
        throw new InternalServerError("Could not assign the bed to the student")
    }
}

async function postBedInRoom(req, res, next) {
    const { roomId } = req.params

    const ROOMID_MIN = 1
    const ROOMID_MAX = 20
    if (+roomId < ROOMID_MIN || +roomId > ROOMID_MAX) {
        throw new BadRequestError("RoomId can only be between 1 and 20")
    }

    try {
        const bed = await db.bed.create({
            data: {
                roomId: +roomId,
            },
        })

        res.json(bed)
    } catch (e) {
        console.error(e)
        throw new InternalServerError("Bed could not be created")
    }
}

async function getFreeBeds(req, res, next) {
    try {
        const freeBeds = await db.bed.findMany({
            where: {
                studentId: null,
            },
        })

        res.json(freeBeds)
    } catch (e) {
        console.error(e)
        throw new InternalServerError(
            "Could not get free beds. Maybe try paid?"
        )
    }
}

module.exports = {
    getBeds,
    getBedsByRoomId,
    putStudentInBed,
    postBedInRoom,
    getFreeBeds,
}
