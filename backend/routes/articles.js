const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const authMiddleware = require('../middleware/auth')

const DATA_PATH = path.join(__dirname, '../data/articles.json')

function readArticles() {
  const raw = fs.readFileSync(DATA_PATH, 'utf-8')
  return JSON.parse(raw)
}

function writeArticles(articles) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(articles, null, 2), 'utf-8')
}

// GET /api/articles — público, usado pelo frontend
router.get('/', (req, res) => {
  try {
    const articles = readArticles()
    res.json(articles)
  } catch (err) {
    res.status(500).json({ error: 'Erro ao ler artigos' })
  }
})

// POST /api/articles — protegido
router.post('/', authMiddleware, (req, res) => {
  try {
    const articles = readArticles()
    const { title, excerpt, fullContent, author, authorImage, date, category, tags, readTime } = req.body

    if (!title || !excerpt || !fullContent || !author || !date || !category) {
      return res.status(400).json({ error: 'Campos obrigatórios em falta' })
    }

    const newArticle = {
      id: articles.length > 0 ? Math.max(...articles.map(a => a.id)) + 1 : 1,
      title,
      excerpt,
      fullContent,
      author,
      authorImage: authorImage || '/images/default.png',
      date,
      category,
      tags: tags || [],
      readTime: readTime || 5
    }

    articles.push(newArticle)
    writeArticles(articles)
    res.status(201).json(newArticle)
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar artigo' })
  }
})

// PUT /api/articles/:id — protegido
router.put('/:id', authMiddleware, (req, res) => {
  try {
    const articles = readArticles()
    const id = parseInt(req.params.id)
    const index = articles.findIndex(a => a.id === id)

    if (index === -1) {
      return res.status(404).json({ error: 'Artigo não encontrado' })
    }

    articles[index] = { ...articles[index], ...req.body, id }
    writeArticles(articles)
    res.json(articles[index])
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar artigo' })
  }
})

// DELETE /api/articles/:id — protegido
router.delete('/:id', authMiddleware, (req, res) => {
  try {
    const articles = readArticles()
    const id = parseInt(req.params.id)
    const filtered = articles.filter(a => a.id !== id)

    if (filtered.length === articles.length) {
      return res.status(404).json({ error: 'Artigo não encontrado' })
    }

    writeArticles(filtered)
    res.json({ message: 'Artigo eliminado com sucesso' })
  } catch (err) {
    res.status(500).json({ error: 'Erro ao eliminar artigo' })
  }
})

module.exports = router
