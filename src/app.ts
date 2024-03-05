import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import * as path from 'path'
import routes from './routes'

const app = express()

// var corsOptions = {
//   origin: 'http://localhost:8080',
// }
dotenv.config({ path: path.join(__dirname, '../.env') })

// app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {})

app.use('/api/v1/', [
  async (req, res) => {
    res.json({ message: 'Wompi API Test' })
  },
  ...routes,
])

export default app
