// /db/db.js
import { MongoClient, ServerApiVersion } from 'mongodb'
import { ATLAS_URI, DATABASE } from '../setEnv.js'

let client = null
let db = null

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export async function connectToDatabase() {
    if (!client) {
        client = new MongoClient(ATLAS_URI, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        })
        try {
            await client.connect()
            console.log('[MongoDB] Connected successfully to MongoDB')
            db = client.db(DATABASE)
        } catch (err) {
            console.error(
                '[MongoDB] An error occurred while connecting to the database.'
            )
            console.error('[MongoDB]', err)
            throw err
        }
    }
    return db
}
