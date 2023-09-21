// /routes/logements.js
import express from 'express'
import {
    retrieveAllLogements,
    retrieveLogementById,
} from '../controller/logements.js'

const router = express.Router()

router.get('/', (_, res) => {
    res.status(200).send('Hello World!')
})

router.get('/logements', retrieveAllLogements)
router.get('/logements/:id', retrieveLogementById)

export default router
