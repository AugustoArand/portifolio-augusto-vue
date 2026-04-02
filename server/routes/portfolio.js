import { Router } from 'express'
import Portfolio from '../models/Portfolio.js'
import { defaultData } from '../../src/data/portfolioData.js'

const router = Router()

// ── GET /api/portfolio ────────────────────────────────────────────────────────
// Retorna os dados salvos no banco. Se ainda não existir, inicializa com defaultData.
router.get('/', async (_req, res) => {
  try {
    let doc = await Portfolio.findOne()

    if (!doc) {
      doc = await Portfolio.create(defaultData)
    }

    res.json(doc)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ── PUT /api/portfolio ────────────────────────────────────────────────────────
// Substitui todo o documento de uma vez (upsert).
router.put('/', async (req, res) => {
  try {
    const doc = await Portfolio.findOneAndUpdate(
      {},
      { $set: req.body },
      { new: true, upsert: true, runValidators: true }
    )
    res.json(doc)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// ── PUT /api/portfolio/about ──────────────────────────────────────────────────
router.put('/about', async (req, res) => {
  try {
    const doc = await Portfolio.findOneAndUpdate(
      {},
      { $set: { about: req.body } },
      { new: true, upsert: true }
    )
    res.json(doc.about)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// ── PUT /api/portfolio/projects ───────────────────────────────────────────────
router.put('/projects', async (req, res) => {
  try {
    const doc = await Portfolio.findOneAndUpdate(
      {},
      { $set: { projects: req.body } },
      { new: true, upsert: true }
    )
    res.json(doc.projects)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// ── PUT /api/portfolio/stacks ─────────────────────────────────────────────────
router.put('/stacks', async (req, res) => {
  try {
    const doc = await Portfolio.findOneAndUpdate(
      {},
      { $set: { stacks: req.body } },
      { new: true, upsert: true }
    )
    res.json(doc.stacks)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// ── PUT /api/portfolio/articles ───────────────────────────────────────────────
router.put('/articles', async (req, res) => {
  try {
    const doc = await Portfolio.findOneAndUpdate(
      {},
      { $set: { articles: req.body } },
      { new: true, upsert: true }
    )
    res.json(doc.articles)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// ── PUT /api/portfolio/contact ────────────────────────────────────────────────
router.put('/contact', async (req, res) => {
  try {
    const doc = await Portfolio.findOneAndUpdate(
      {},
      { $set: { contact: req.body } },
      { new: true, upsert: true }
    )
    res.json(doc.contact)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// ── POST /api/portfolio/reset ─────────────────────────────────────────────────
// Restaura os dados padrão.
router.post('/reset', async (_req, res) => {
  try {
    await Portfolio.deleteMany()
    const doc = await Portfolio.create(defaultData)
    res.json(doc)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router
