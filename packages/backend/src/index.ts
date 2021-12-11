import { init as databaseInit } from '@repo/database'
import express from 'express'

const app = express()

databaseInit()

const PORT = process.env.PORT || 3000

app.get('/', (req, resp) => {
  return resp.json({ message: 'runnning...' })
})

app.listen(PORT, () => {
  console.log('server listening to port', PORT)
})
