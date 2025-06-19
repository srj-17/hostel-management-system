class BadRequestError extends Error {
    constructor(message) {
        super(message || "Server cannot process the request");
        this.statusCode = 400;
        this.name = "BadRequestError";
    }
}

module.exports = BadRequestError