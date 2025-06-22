const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

// Basic Swagger options
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Hostel Management System API documentation",
            version: "1.0.0",
            description: "API docs for hms",
            contact: {
                name: "srj-17",
                email: "ranhoodlum17@gmail.com",
            },
            license: {
                name: "MIT",
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Development server",
            },

            {
                url: "https://api.yourdomain.com",
                description: "Production server",
            },
        ],
        // components: {
        //     securitySchemes: {
        //         bearerAuth: {
        //             type: "http",
        //             scheme: "bearer",
        //             bearerFormat: "JWT",
        //         },
        //     },
        // },
        // security: [
        //     {
        //         bearerAuth: [],
        //     },
        // ],
    },

    // Path to the API docs
    // files containing jsdoc annotations
    apis: ["./routes/*.js", "./models/*.js"],
}

const swaggerOptions = {
    customSiteTitle: "Hostel Management System API docs",
    customCss: `
    .topbar { display: none }  /* Remove top bar */ 
    .swagger-ui .info { margin: 20px 0 }  /* Adjust info section */
    .swagger-ui .scheme-container { padding: 15px 0 }  /* Adjust auth section */
  `,
}

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options)

module.exports = (app) => {
    // Swagger page
    app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(swaggerSpec, swaggerOptions)
    )

    // Docs in JSON format
    app.get("/api-docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json")
        res.send(swaggerSpec)
    })
}
