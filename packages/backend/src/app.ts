import { init as databaseInit } from '@repo/database'
import cors from 'cors'
import express from 'express'
import { getBrokerController } from './broker/getBroker'
import { handle } from './utils/handler'

const app = express()

app.use(cors())

databaseInit()

const router = express.Router()

router.get('/broker', handle(getBrokerController))

app.use('/api/v1', router)

export default app
