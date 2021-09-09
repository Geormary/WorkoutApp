import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import getAllExercises from './getAllExercises.js'
import createExercise from './createExercise.js'

const app = express();
dotenv.config();
app.use(express.json()); // Parse incoming JSON
app.use(cors());

function handler(fn) {
  return (req, res) => {
    try {
      const result = fn(req);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({error: err});
    }
  }
}

app.get("/exercises", handler((req) => {
  return getAllExercises();
}));

app.post("/exercises", handler(req => {
  return createExercise(req.body.name);
}));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`🪨 Listening on port ${port} 💎 `);
});
