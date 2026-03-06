require('dotenv').config()

const express = require('express')
const cors = require('cors')
const articlesRouter = require('./routes/articles')
const authRouter = require('./routes/auth')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
  origin: function(origin, callback) {
    if (!origin ||
        origin.endsWith('.vercel.app') ||
        origin === 'https://www.sscb-advogadas.pt' ||
        origin === 'http://localhost:5173') {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}))

app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/articles', articlesRouter)

app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`)
})
