const app = require("./test_app")
const request = require("supertest")
const req = request(app)
const db = require("../models")

afterEach(async () => {
    await db.bed.deleteMany()
    await db.student.deleteMany()
})

test("bed route sends json", (done) => {
    req.get("/beds").expect("Content-Type", /json/).expect(200, done)
})

test("creating beds works", (done) => {
    req.post("/beds/1").expect("Content-Type", /json/).expect(200, done)
})

test("free bed route sends json", (done) => {
    req.get("/beds/free").expect("Content-Type", /json/).expect(200, done)
})
