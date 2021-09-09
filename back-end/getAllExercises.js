export default async function getAllExercises(db) {
    console.log('h3llo')
    return await db.any("SELECT * FROM exercises");
}
