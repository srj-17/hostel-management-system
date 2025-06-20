class NotFoundError extends Error {
    constructor(message) {
        super(message || "The resource was not found");
        this.statusCode = 404;
        this.name = "NotFoundError";
    }
}

module.exports = NotFoundError