require("dotenv").config()
const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

// body parsers
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const router = require("./routes")

// routes
app.use("/students", router.student)
app.use("/attandances", router.attandance)
app.use("/beds", router.bed)
app.use("/payments", router.payment)

const PORT = process.env.PORT
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
