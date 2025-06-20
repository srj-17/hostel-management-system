class InternalServerError extends Error {
    constructor(message) {
        super(message || "There was an error in the server");
        this.statusCode = 500;
        this.name = "InternalServerError";
    }
}

module.exports = InternalServerError