// /setEnv.js
import dotenv from 'dotenv'

dotenv.config()
export const { ATLAS_URI, SERVER_PORT, DATABASE, COLLECTION } = process.env
