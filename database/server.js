const client = require("./connection.js");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// import `items` from `routes` folder
const usersRouter = require("../api/user");
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3300/users", "http://localhost:3300"],
    credentials: true,
    origin: true,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", usersRouter);

app.listen(3300, () => {
  console.log("Server is now listening at port 3300");
});

client.connect();

module.exports = app;
