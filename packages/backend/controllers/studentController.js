const db = require("../models")

async function getStudents(req, res, next) {
    const students = await db.student.findMany()

    res.json(students)
}

async function postStudents(req, res, next) {
    const { firstName, lastName, email, dob, phone, address } = req.body

    try {
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
    const { studentId } = req.params
    const student = await db.student.findUnique({
        where: {
            id: +studentId,
        },
    })
}

module.exports = {
    getStudents,
    postStudents,
    getStudent,
}
