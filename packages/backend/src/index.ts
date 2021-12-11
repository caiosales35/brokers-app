import express from 'express'

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, resp) => {
  return resp.json({ message: 'runnning...' })
})

app.listen(PORT, () => {
  console.log('server listening to port', PORT)
})
