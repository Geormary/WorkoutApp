const db = require("../db/dbConfig");

const getAllExercises = async () => {
  try {
    const allExercises = await db.any("SELECT * FROM exercises");
    return allExercises;
  } catch (error) {
    return error;
  }
};


module.exports = getAllExercises; 
