// /routes/logements.js
import express from 'express'
// import { connectToDatabase } from '../db/db'
import {
    retrieveAllLogements,
    retrieveLogementById,
} from '../controller/logements.js'

const router = express.Router()

router.get('/', (_, res) => {
    res.status(200).send('Hello World!')
})

router.get('/logements', retrieveAllLogements)
// router.get('/logements/:id', retrieveLogementById)
router.get('/logements/:id', retrieveLogementById)

// Simulate an error route
router.get('/simulate-error', (req, res, next) => {
    try {
        // Simulate an error by throwing an exception
        throw new Error('This is a simulated error')
    } catch (error) {
        next(error) // Pass the error to the next middleware (error handler)
    }
})
export default router
