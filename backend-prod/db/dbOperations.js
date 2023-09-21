// /db/dbOperations.js
import { connectToDatabase } from './db.js'
import { COLLECTION } from '../setEnv.js'

export async function retrieveAllLogementsDb() {
    const db = await connectToDatabase()
    const collection = db.collection(COLLECTION)
    const results = await collection.find({}).toArray()
    return results
}

// New function to retrieve a logement by ID
export async function retrieveLogementByIdDb(logementId) {
    const db = await connectToDatabase()
    const collection = db.collection(COLLECTION)
    const logement = await collection.findOne({ id: logementId })

    return logement
}
