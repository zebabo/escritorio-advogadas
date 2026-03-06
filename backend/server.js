require('dotenv').config()

const express = require('express')
const cors = require('cors')
const articlesRouter = require('./routes/articles')
const authRouter = require('./routes/auth')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}))

app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/articles', articlesRouter)

app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`)
})
