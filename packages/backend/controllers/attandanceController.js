const InternalServerError = require("../customErrors/InternalServerError")
const db = require("../models")
const { getMonthStartDate, getMonthEndDate } = require("../utils/dateFunctions")

// get attandance of all students for today
async function getAttandances(req, res, next) {
    const today = new Date()
    try {
        const todaysAttandances = await db.attendance.findMany({
            where: {
                date: today,
            },
        })

        res.json(todaysAttandances)
    } catch (e) {
        throw new InternalServerError(
            "Getting today's attandances was a failure! Better luck next day!"
        )
    }
}

// toggle attandance presence for that day
async function putAttandance(req, res, next) {
    try {
        const { studentId } = req.params
        const { date } = req.body
        const providedDate = new Date(date)

        // provided date alone doesn't produce timestamps, so have
        // to do this.
        const providedDateWithTimeStamp = new Date(
            providedDate.getFullYear(),
            providedDate.getMonth(),
            providedDate.getDate() + 1
        )

        // used findMany because find requires unique id for
        // attandance, which we don't have. Maybe schema or logic
        // needs fixing.
        const attandance = await db.attendance.findUnique({
            where: {
                attandanceIdentifier: {
                    studentId: +studentId,
                    date: providedDateWithTimeStamp,
                },
            },
        })

        const newAttandance = attandance.present ? false : true

        const updatedAttandance = await db.attendance.update({
            where: {
                id: attandance.id,
            },
            data: {
                present: newAttandance,
            },
        })

        res.json(updatedAttandance)
    } catch (e) {
        console.error(e)
        throw new InternalServerError("Attandance could not be updated")
    }
}
// get attandance of student for the whole month
async function getAttandanceByStudentId(req, res, next) {
    const { studentId } = req.params
    const monthStart = getMonthStartDate(new Date())
    const monthEnd = getMonthEndDate(new Date())

    try {
        const attandancesForTheMonth = await db.attendance.findMany({
            where: {
                studentId: +studentId,
                date: {
                    gte: monthStart,
                    lte: monthEnd,
                },
            },
        })

        res.json(attandancesForTheMonth)
    } catch (e) {
        throw new InternalServerError(
            "Student's attandances could not be found"
        )
    }
}

async function postAttandanceOfCurrentMonth(req, res, next) {
    try {
        async function postAttandanceOfDay(studentId, date) {
            await db.attendance.create({
                data: {
                    studentId,
                    date,
                },
            })
        }

        async function postAttandanceOfMonth(studentId) {
            const currentDate = new Date()
            const currentYear = currentDate.getFullYear()
            const currentMonth = currentDate.getMonth()
            const monthStartDate = getMonthStartDate(currentDate).getDate()
            const monthEndDate = getMonthEndDate(currentDate).getDate()
            for (let i = monthStartDate; i <= monthEndDate; i++) {
                const date = new Date(currentYear, currentMonth, i)
                await postAttandanceOfDay(studentId, date)
            }
        }

        const students = await db.student.findMany()

        students.forEach(async (student) => {
            await postAttandanceOfMonth(student.id)
        })

        res.json({ msg: "Attandances for the month created" })
    } catch (e) {
        throw new InternalServerError(
            "Attances for the month could not be created"
        )
    }
}

module.exports = {
    getAttandances,
    postAttandanceOfCurrentMonth,
    getAttandanceByStudentId,
    putAttandance,
}
