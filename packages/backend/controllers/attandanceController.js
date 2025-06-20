const InternalServerError = require("../customErrors/InternalServerError");
const db = require("../models");

// get attandance of all students for today
async function getAttandances(req, res, next) {
    const today = new Date();
    try {
        const todaysAttandances = await db.attendance.findMany({
            where: {
                date: today
            }
        });

        res.json(todaysAttandances);
    } catch (e) {
        throw new InternalServerError("Getting today's attandances was a failure! Better luck next day!");
    }
}
   
function putAttandances(req,res,next){}

// get attandance of student for the whole month
function getAttandanceByStudentId(req, res, next) {
}

async function postAttandanceOfMonth(req, res, next) { 
    try {

    async function postAttandanceOfDay(studentId, date) {
        await db.attendance.create({
            data: {
                studentId,
                date
            }
        })
    }

    async function postAttandanceOfMonth(studentId) {
        const DAYS_IN_MONTH = 30
        for (let i = 0; i < 30; i++) {
            const todayDate = new Date()
            const date = new Date(new Date().setDate((todayDate.getDate() + i) % DAYS_IN_MONTH));
            await postAttandanceOfDay(studentId, date);
        }
    }
    
    const students = await db.student.findMany();

    students.forEach(async student => {
        await postAttandanceOfMonth(student.id);
    })

    res.json("Attandances for the month created");
    } catch (e) {
        throw new InternalServerError("Attances for the month could not be created");
    }
}

module.exports = {
    getAttandances,
    postAttandanceOfMonth
}

