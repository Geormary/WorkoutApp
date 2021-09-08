DROP DATABASE IF EXISTS workouts_db;
CREATE DATABASE workouts_db;

\c workouts_db;

CREATE TABLE exercises(
    id SERIAL PRIMARY KEY, 
    name TEXT,
    date TIMESTAMP(DATE)),
    reps INTEGER,
    sets INTEGER

);

