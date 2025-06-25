const app = require("./test_app")
const request = require("supertest")(app)
const db = require("../models")

afterEach(async () => {
    await db.student.deleteMany()
})

test("students route sends json", (done) => {
    request
        .post("/students")
        .type("application/json")
        .send({
            firstName: "Ram",
            lastName: "Rijal",
            email: "saugat@rijal.com",
            dob: "2020-10-20",
            phone: 980000000,
            address: "jhapa",
        })
        .then(() => {
            request
                .get("/students")
                .expect("Content-Type", /json/)
                .expect(200, done)
        })
})
