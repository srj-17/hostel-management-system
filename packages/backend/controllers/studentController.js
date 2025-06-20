const db = require("../models")
const InternalServerError = require("../customErrors/InternalServerError")
const NotFoundError = require("../customErrors/NotFoundError")

async function getStudents(req, res, next) {
    const students = await db.student.findMany()

    res.json(students)
}

async function postStudents(req, res, next) {
    try {
        const { firstName, lastName, email, dob, phone, address } = req.body
        const student = await db.student.create({
            data: {
                firstName,
                lastName,
                email,
                phone: +phone,
                address,
                dob: new Date(dob),
            },
        })

        res.json(student)
    } catch (e) {
        res.json({
            msg: "Student could not be created",
        })
    }
}

async function getStudent(req, res, next) {
    try {
        const { studentId } = req.params

        const student = await db.student.findUnique({
            where: {
                id: +studentId,
            },
        })

        if (!student) {
            throw new NotFoundError("Student could not be found")
        }

        res.json(student)
    } catch (e) {
        console.error(e)
        if ((e.stuatusCode = 404)) {
            throw e
        }
        throw new InternalServerError("Error occured when getting student")
    }
}

async function putStudent(req, res, next) {
    try {
        const { studentId } = req.params
        const { firstName, lastName, email, dob, phone, address } = req.body

        const student = await db.student.update({
            where: { id: +studentId },
            data: {
                firstName,
                lastName,
                email,
                phone: +phone,
                address,
                dob: new Date(dob),
            },
        })

        res.json(student)
    } catch (e) {
        console.error(e)
        throw new InternalServerError("Student could not be updated")
    }
}

async function deleteStudent(req, res, next) {
    const { studentId } = req.params
    try {
        const deletedStudent = await db.student.delete({
            where: {
                id: +studentId,
            },
        })

        res.json(deletedStudent)
    } catch (e) {
        console.error(e)
        throw new InternalServerError("Student could not be deleted")
    }
}

module.exports = {
    getStudents,
    postStudents,
    getStudent,
    putStudent,
    deleteStudent,
}

