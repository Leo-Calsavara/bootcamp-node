import { openDB } from "./config.js";

export async function init(){
    const db = await openDB();
    await db.exec(`
        CREATE TABLE IF NOT EXISTS tasks(
            ID INTEGER PRIMARY KEY,
            Title TEXT NOT NULL,
            Status TEXT NOT NULL,
            Date TEXT NOT NULL
        )
    `);
        console.log('Cacete de agulha')
}