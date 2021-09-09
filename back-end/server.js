import express from 'express';
import cors from 'cors';
import getAllExercises from './getAllExercises.js';
import createExercise from './createExercise.js';
import pgPromise from 'pg-promise';

const pgp = pgPromise({});
const db = pgp('postgres://postgres:@localhost:5432/workouts_db');

const app = express();
app.use(express.json()); // Parse incoming JSON
app.use(cors());

async function handler(fn) {
  return (req, res) => {
    try {
      const result = await fn(req);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({error: err});
    }
  }
}

app.get("/exercises", handler((req) => {
  return getAllExercises(db);
}));

app.post("/exercises", handler(req => {
  return createExercise(db, req.body.name);
}));

const port = 5555;
app.listen(port, () => {
  console.log(`🪨 Listening on port ${port} 💎 `);
});