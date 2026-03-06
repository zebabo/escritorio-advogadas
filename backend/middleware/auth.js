const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'token-secreto-mudar-em-producao'

function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization']
  if (!authHeader || authHeader !== `Bearer ${ADMIN_TOKEN}`) {
    return res.status(401).json({ error: 'Não autorizado' })
  }
  next()
}

module.exports = authMiddleware
