const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const PORT = 5000;
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://nicehashminer7744:Wjj2GQa3LKxWJIwQ@cluster0.29rw9zc.mongodb.net/payinstacard?retryWrites=true&w=majority"
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to db"));

app.use("/api", require("./routes/createUser"));
app.use("/api", require("./routes/loginUser"));

app.listen(`${PORT}`, (req, res) => {
  console.log(`server is running on port ${PORT}`);
});
