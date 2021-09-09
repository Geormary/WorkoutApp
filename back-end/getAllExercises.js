import db from './db.js';

export default async function getAllExercises() {
    return await db.any("SELECT * FROM exercises");
    // return ['exercise', 'ex-er-cise', 'eggs ARE sides', 'for bacon', 'bacon!']
}
