const db = require("../models")
const InternalServerError = require("../customErrors/InternalServerError")

async function getPayments(req, res, next) {
    try {
        const { studentId } = req.params
        const payments = await db.student.findUnique({
            where: {
                id: +studentId,
            },
            include: {
                payments: true,
            },
        })

        res.json(payments)
    } catch (e) {
        throw new InternalServerError(
            "Could not get the payments of the student!"
        )
    }
}

async function postPayments(req, res, next) {
    try {
        const currentDate = new Date()
        const year = currentDate.getFullYear()
        const month = currentDate.getMonth()

        async function createPaymentRecord(studentId) {
            await db.payment.create({
                data: {
                    studentId,
                    year,
                    month,
                },
            })
        }

        const students = await db.student.findMany()

        students.forEach(async (student) => {
            await createPaymentRecord(student.id)
        })

        res.json({ msg: "Payments for students created" })
    } catch (e) {
        console.error(e)
        throw new InternalServerError(
            "Payments for the month could not be created"
        )
    }
}

async function getPayment(req, res, next) {
    const { studentId } = req.params
    const { year, month } = req.query
    try {
        const payments = await db.student.findUnique({
            where: {
                id: +studentId,
            },
            select: {
                id: true,
                email: true,
                payments: {
                    where: {
                        year: +year,
                        month: +month,
                    },
                },
            },
        })

        res.json(payments)
    } catch (e) {
        console.error(e)
        throw new InternalServerError("Couldn't get payments for given student")
    }
}

async function putPayment(req, res, next) {
    try {
        const { studentId } = req.params
        const currentYear = new Date().getFullYear()
        const currentMonth = new Date().getMonth()

        const payment = await db.payment.findUnique({
            where: {
                year_month_studentId: {
                    year: currentYear,
                    month: currentMonth,
                    studentId: +studentId,
                },
            },
        })

        const newPaymentStatus = payment.feePaid ? false : true

        const toggledPayment = await db.payment.update({
            where: {
                id: payment.id,
            },
            data: {
                feePaid: newPaymentStatus,
            },
        })

        res.json(toggledPayment)
    } catch (e) {
        console.error(e)
        throw new InternalServerError(
            "Could not change the payment status of the student for the month"
        )
    }
}

module.exports = {
    getPayments,
    postPayments,
    getPayment,
    putPayment,
}
