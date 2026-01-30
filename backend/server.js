import express from 'express'
import cors from 'cors'
import pg from 'pg'

const { Pool } = pg

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000
const DATABASE_URL = process.env.DATABASE_URL

if (!DATABASE_URL) {
  console.warn('DATABASE_URL is not set. Backend will run without DB writes.')
}

const pool = DATABASE_URL
  ? new Pool({
      connectionString: DATABASE_URL,
      ssl: process.env.PGSSLMODE === 'disable' ? false : { rejectUnauthorized: false },
    })
  : null

const app = express()

app.use(
  cors({
    origin: true,
    credentials: false,
  }),
)
app.use(express.json({ limit: '200kb' }))

async function ensureSchema() {
  if (!pool) return
  await pool.query(`
    CREATE TABLE IF NOT EXISTS waitlist_submissions (
      id BIGSERIAL PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      email TEXT NOT NULL,
      wallet TEXT NOT NULL,
      twitter TEXT NOT NULL,
      discord TEXT NOT NULL
    );
  `)
}

app.get('/health', async (_req, res) => {
  try {
    if (pool) await pool.query('SELECT 1 as ok')
    res.json({ ok: true })
  } catch (e) {
    res.status(500).json({ ok: false })
  }
})

app.post('/waitlist', async (req, res) => {
  const email = String(req.body?.email ?? '').trim()
  const wallet = String(req.body?.wallet ?? '').trim()
  const twitter = String(req.body?.twitter ?? '').trim()
  const discord = String(req.body?.discord ?? '').trim()

  const missing = []
  if (!email) missing.push('email')
  if (!wallet) missing.push('wallet')
  if (!twitter) missing.push('twitter')
  if (!discord) missing.push('discord')

  if (missing.length) {
    return res.status(400).json({ ok: false, error: `Missing: ${missing.join(', ')}` })
  }

  try {
    if (pool) {
      await pool.query(
        `INSERT INTO waitlist_submissions (email, wallet, twitter, discord)
         VALUES ($1, $2, $3, $4)`,
        [email, wallet, twitter, discord],
      )
    }
    return res.json({ ok: true })
  } catch (e) {
    return res.status(500).json({ ok: false })
  }
})

await ensureSchema()

app.listen(PORT, () => {
  console.log(`SimulationsAI backend listening on ${PORT}`)
})

