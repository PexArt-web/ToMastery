require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

const { log } = console;

// app.use(express.json())

app.get("/", (req, res) => {
  res.json({ msg: "Welcome back to class" });
});

app.use((req, res, next) => {
  res.json({ message: "route not found" });
});

const server = app.listen(port, () => {
  log(`server started at port ${port}`);
});

// log(server, "server")
