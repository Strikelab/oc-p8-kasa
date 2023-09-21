// /controller/logements.js
import {
    retrieveAllLogementsDb,
    retrieveLogementByIdDb,
} from '../db/dbOperations.js'

async function retrieveAllLogements(_, res) {
    try {
        const results = await retrieveAllLogementsDb()
        res.status(200).send(results)
        console.log('[MongoDB] response has been sent to the client')
    } catch (error) {
        console.error('[MongoDB] Error retrieving logements:', error)
        res.status(500).send({
            error: 'An error occurred while retrieving logements',
        })
    }
}

async function retrieveLogementById(req, res) {
    const logementId = req.params.id // Get the ID from the URL parameter
    try {
        const logement = await retrieveLogementByIdDb(logementId)
        console.log('Logmeent ID : ', logementId)
        if (logement) {
            res.status(200).send(logement)
            console.log('[MongoDB] Logement data has been sent to the client')
        } else {
            res.status(404).send({ error: 'Logement not found' })
        }
    } catch (error) {
        console.error('[MongoDB] Error retrieving logement by ID:', error)
        res.status(500).send({
            error: 'An error occurred while retrieving the logement',
        })
    }
}

export { retrieveAllLogements, retrieveLogementById }
