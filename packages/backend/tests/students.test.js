const app = require("./test_app")
const request = require("supertest")(app)

test("students route sends json", (done) => {
    request.get("/students").expect("Content-Type", /json/).expect(200, done)
})
