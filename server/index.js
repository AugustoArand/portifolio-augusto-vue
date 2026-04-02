import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import portfolioRoutes from './routes/portfolio.js'

const app = express()
const PORT = process.env.PORT || 3001

// ── Middlewares ───────────────────────────────────────────────────────────────
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }))
app.use(express.json())

// ── Rotas ─────────────────────────────────────────────────────────────────────
app.use('/api/portfolio', portfolioRoutes)

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' })
})

// ── Conexão MongoDB ───────────────────────────────────────────────────────────
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB conectado')
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
  })
  .catch((err) => {
    console.error('Falha ao conectar ao MongoDB:', err.message)
    process.exit(1)
  })
