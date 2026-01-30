import express from 'express'
import cors from 'cors'
import pg from 'pg'
import session from 'express-session'
import connectPgSimple from 'connect-pg-simple'
import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { Strategy as DiscordStrategy } from 'passport-discord'
import { ethers } from 'ethers'
import crypto from 'crypto'

const { Pool } = pg

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000
const DATABASE_URL = process.env.DATABASE_URL
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN
const SESSION_SECRET = process.env.SESSION_SECRET || 'dev-insecure-secret'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL

const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET
const DISCORD_CALLBACK_URL = process.env.DISCORD_CALLBACK_URL

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
app.set('trust proxy', 1)

app.use(
  cors({
    origin: FRONTEND_ORIGIN ?? true,
    credentials: true,
  }),
)
app.use(express.json({ limit: '200kb' }))

const PgSession = connectPgSimple(session)

app.use(
  session({
    store: pool ? new PgSession({ pool, createTableIfMissing: true }) : undefined,
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      maxAge: 1000 * 60 * 60 * 24 * 14,
    },
  }),
)

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

if (GOOGLE_CLIENT_ID && GOOGLE_CLIENT_SECRET) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: GOOGLE_CALLBACK_URL || '/auth/google/callback',
      },
      (_accessToken, _refreshToken, profile, done) => {
        const primaryEmail = profile.emails?.[0]?.value
        return done(null, {
          provider: 'google',
          id: profile.id,
          displayName: profile.displayName || primaryEmail || 'Google user',
          email: primaryEmail,
        })
      },
    ),
  )
}

if (DISCORD_CLIENT_ID && DISCORD_CLIENT_SECRET) {
  passport.use(
    new DiscordStrategy(
      {
        clientID: DISCORD_CLIENT_ID,
        clientSecret: DISCORD_CLIENT_SECRET,
        callbackURL: DISCORD_CALLBACK_URL || '/auth/discord/callback',
        scope: ['identify', 'email'],
      },
      (_accessToken, _refreshToken, profile, done) => {
        // passport-discord uses `username` and `discriminator` in many cases
        const name =
          profile.username && profile.discriminator
            ? `${profile.username}#${profile.discriminator}`
            : profile.username || profile.displayName || 'Discord user'
        return done(null, {
          provider: 'discord',
          id: profile.id,
          displayName: name,
          email: profile.email,
        })
      },
    ),
  )
}

app.get('/', (_req, res) => {
  res
    .status(200)
    .type('text/plain')
    .send('SimulationsAI backend is running. Use /health for status checks.')
})

function getAuthedUser(req) {
  // passport stores user on req.user; wallet flow stores in session
  return req.user || req.session?.walletUser || null
}

function requireAuth(req, res, next) {
  const u = getAuthedUser(req)
  if (!u) return res.status(401).json({ ok: false })
  return next()
}

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

app.get('/auth/me', (req, res) => {
  const u = getAuthedUser(req)
  if (!u) return res.status(401).json({ ok: false })
  return res.json({ ok: true, user: u })
})

app.post('/auth/logout', (req, res) => {
  // passport 0.6 requires callback
  req.logout?.(() => {})
  if (req.session) {
    req.session.destroy(() => {
      res.json({ ok: true })
    })
  } else {
    res.json({ ok: true })
  }
})

app.get('/auth/google', (req, res, next) => {
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
    return res.status(501).json({ ok: false, error: 'Google OAuth not configured' })
  }
  return passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next)
})

app.get(
  '/auth/google/callback',
  (req, res, next) => {
    if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
      return res.status(501).json({ ok: false, error: 'Google OAuth not configured' })
    }
    return passport.authenticate('google', { failureRedirect: `${FRONTEND_ORIGIN}/login` })(
      req,
      res,
      next,
    )
  },
  (req, res) => {
    res.redirect(`${FRONTEND_ORIGIN}/app`)
  },
)

app.get('/auth/discord', (req, res, next) => {
  if (!DISCORD_CLIENT_ID || !DISCORD_CLIENT_SECRET) {
    return res.status(501).json({ ok: false, error: 'Discord OAuth not configured' })
  }
  return passport.authenticate('discord')(req, res, next)
})

app.get(
  '/auth/discord/callback',
  (req, res, next) => {
    if (!DISCORD_CLIENT_ID || !DISCORD_CLIENT_SECRET) {
      return res.status(501).json({ ok: false, error: 'Discord OAuth not configured' })
    }
    return passport.authenticate('discord', { failureRedirect: `${FRONTEND_ORIGIN}/login` })(
      req,
      res,
      next,
    )
  },
  (req, res) => {
    res.redirect(`${FRONTEND_ORIGIN}/app`)
  },
)

app.get('/auth/wallet/nonce', (req, res) => {
  const nonce = crypto.randomBytes(16).toString('hex')
  req.session.walletNonce = nonce
  res.json({
    ok: true,
    nonce,
    message: `SimulationsAI login nonce: ${nonce}`,
  })
})

app.post('/auth/wallet/verify', async (req, res) => {
  const address = String(req.body?.address ?? '').trim()
  const signature = String(req.body?.signature ?? '').trim()
  const expected = req.session.walletNonce
  if (!expected) return res.status(400).json({ ok: false, error: 'Missing nonce' })
  if (!address || !signature) return res.status(400).json({ ok: false, error: 'Missing fields' })

  const message = `SimulationsAI login nonce: ${expected}`
  try {
    const recovered = ethers.verifyMessage(message, signature)
    if (recovered.toLowerCase() !== address.toLowerCase()) {
      return res.status(401).json({ ok: false, error: 'Signature mismatch' })
    }

    req.session.walletUser = {
      provider: 'wallet',
      id: address.toLowerCase(),
      displayName: `${address.slice(0, 6)}…${address.slice(-4)}`,
    }
    req.session.walletNonce = null
    return res.json({ ok: true })
  } catch {
    return res.status(401).json({ ok: false, error: 'Invalid signature' })
  }
})

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

