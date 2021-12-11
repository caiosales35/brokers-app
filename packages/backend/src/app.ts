import { init as databaseInit } from '@repo/database'
import cors from 'cors'
import express from 'express'

const app = express()

app.use(cors())

databaseInit()

const router = express.Router()

router.get('/', (req, resp) => {
  return resp.json({ message: 'runnning...' })
})

app.use('/api/v1', router)

export default app
