const app = require("./test_app")
const request = require("supertest")(app)
const db = require("../models")

let studentId = null
beforeAll(async () => {
    const student = await db.student.create({
        data: {
            firstName: "Ram",
            lastName: "Rijal",
            email: "saugat@rijal.com",
            dob: new Date(),
            phone: 980000000,
            address: "jhapa",
        },
    })

    studentId = student.id
})

afterEach(async () => {
    await db.payment.deleteMany()
})

afterAll(async () => {
    await db.student.deleteMany()
})

test("payments route sends json", (done) => {
    const route = `/students/${studentId}/payments`
    request.get(route).expect("Content-Type", /json/).expect(200, done)
})

test("payments of all students for current month can be created", (done) => {
    request
        .post("/payments/month")
        .expect("Content-Type", /json/)
        .expect(200, done)
})
