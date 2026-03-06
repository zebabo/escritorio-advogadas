const express = require('express')
const router = express.Router()

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'senha-secreta-mudar-em-producao'
const ADMIN_TOKEN    = process.env.ADMIN_TOKEN    || 'token-secreto-mudar-em-producao'

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { password } = req.body

  if (!password) {
    return res.status(400).json({ error: 'Password obrigatória' })
  }

  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Password incorreta' })
  }

  res.json({ token: ADMIN_TOKEN })
})

module.exports = router
