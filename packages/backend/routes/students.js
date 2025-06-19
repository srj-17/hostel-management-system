const { getStudents } = require("../controllers/studentController");

const { Router } = express();
const student = Router();

student.get("/", getStudents);

module.exports = student;
