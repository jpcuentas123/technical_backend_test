import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import * as path from 'path'
import routes from './routes'
const app = express()

var corsOptions = {
  origin: 'http://localhost:8081',
}
dotenv.config({ path: path.join(__dirname, '../.env') })

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({ message: 'Wompi API Test' })
})

app.use('/api/v1/', ...routes)

const PORT = process.env.NODE_DOCKER_PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.NODE_LOCAL_PORT}.`)
})
