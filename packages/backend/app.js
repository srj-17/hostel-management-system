require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.json({ msg: "Hello, working!" });
});

const PORT = process.env.PORT;
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
