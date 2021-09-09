const express = require("express");
const exercises = express.Router({ mergeParams: true });

const getAllExercises = require("../queries/exercises");

exercises.get("/", async (req, res) => {
  const allExercises = await getAllExercises();
  res.status(200).json(allExercises);
});
module.exports = exercises;
