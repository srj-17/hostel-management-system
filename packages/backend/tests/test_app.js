const express = require("express")
const app = express()
const router = require("../routes")

app.use(express.urlencoded())
app.use(express.json())

app.use("/students", router.students)
app.use("/attandances", router.attandances)
app.use("/beds", router.beds)
app.use("/payments", router.payments)

module.exports = app
