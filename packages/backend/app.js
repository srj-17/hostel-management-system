require("dotenv").config()
const express = require("express")
const cors = require("cors")
const setupSwagger = require("./swaggerConfig")

const app = express()

app.use(cors())

// body parsers
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const router = require("./routes")
const NotFoundError = require("./customErrors/NotFoundError")

// routes
app.use("/students", router.students)
app.use("/attandances", router.attandances)
app.use("/beds", router.beds)
app.use("/payments", router.payments)

// documentation
setupSwagger(app)

// error handling
app.use((req, res, next) => {
    throw new NotFoundError()
})

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        msg: err.message,
    })
})

const PORT = process.env.PORT
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
