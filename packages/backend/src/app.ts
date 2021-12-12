import { init as databaseInit } from '@repo/database'
import cors from 'cors'
import express from 'express'
import qs from 'query-strings-parser'
import { getBrokersController } from './broker/getBrokers'
import { getBrokersOrderByLeadsController } from './broker/getBrokersOrderByLeads'
import { handle } from './utils/handler'
// eslint-disable-next-line @typescript-eslint/no-var-requires

const app = express()

app.use(cors())
app.use(
  qs({
    default: {
      pagination: {
        skip: 0,
        limit: 100
      }
    }
  })
)

export const database = databaseInit()

const router = express.Router()

router.get('/broker/lead', handle(getBrokersOrderByLeadsController))
router.get('/broker', handle(getBrokersController))

app.use('/api/v1', router)

export default app
