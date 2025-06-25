const app = require("./test_app")
const request = require("supertest")
const req = request(app)
const db = require("../models")

afterEach(async () => {
    await db.attendance.deleteMany()
    await db.student.deleteMany()
})

test("attandances route sends json", (done) => {
    req.get("/attandances").expect("Content-Type", /json/).expect(200, done)
})

// TODO: improve this test to match real life scenario
test("attandance route works", (done) => {
    req.post("/attandances/month").then(() => {
        request(app).get("/attandances").expect(200, done)
    })
})
