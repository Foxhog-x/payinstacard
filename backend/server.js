const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;
app.use(express.json());

app.use("/", require("./routes/userlogin"));

app.listen(`${PORT}`, (req, res) => {
  console.log(`server is running on port ${PORT}`);
});
