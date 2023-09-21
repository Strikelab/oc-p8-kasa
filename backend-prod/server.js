// /server.js

import express from 'express'
import cors from 'cors'
import { SERVER_PORT } from './setEnv.js'
import router from './routes/logements.js'
import { connectToDatabase } from './db/db.js' // Import the database functions
import { errorHandler } from './middleware/errorMiddleware.js'
const app = express()

// Middleware to parse JSON request bodies
app.use(express.json())
app.use(cors())
// Initialize the database connection first
connectToDatabase()
    .then(() => {
        // Attach your routes and start the server only after the database connection is established
        app.use('/api/v1', router)
        // Use the error handler middleware after all routes and middleware
        app.use(errorHandler)

        app.listen(SERVER_PORT, () => {
            console.log(`[Express] listening on port ${SERVER_PORT}`)
        })
    })
    .catch((error) => {
        console.error('[Express] Error connecting to the database:', error)
    })
