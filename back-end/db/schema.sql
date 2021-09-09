DROP DATABASE IF EXISTS workouts_db;
CREATE DATABASE workouts_db;

\c workouts_db;

DROP TABLE IF EXISTS exercises;

CREATE TABLE exercises(
    id SERIAL PRIMARY KEY, 
    name TEXT,
    date DATE,
    reps INTEGER,
    sets INTEGER

);

