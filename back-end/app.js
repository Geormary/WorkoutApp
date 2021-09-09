// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const exercisesController = require("./controllers/exercisesController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

app.use("/exercises", exercisesController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Workout App");
});


app.get("*", (req, res) => {
  res.send("Page not found");
});

// EXPORT
module.exports = app;
