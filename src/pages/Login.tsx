import { useState, type FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { setAuthenticated, setUser } from '../lib/auth'

export function Login() {
  const [email, setEmail] = useState('')
  const [mode, setMode] = useState<'email' | 'discord' | 'wallet'>('email')
  const [discordUsername, setDiscordUsername] = useState('')
  const [walletAddress, setWalletAddress] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const redirectTo = (location.state as { from?: string } | null)?.from ?? '/app'

  const finish = (displayName: string, emailValue?: string) => {
    setAuthenticated(true)
    setUser({ displayName, email: emailValue })
    navigate(redirectTo, { replace: true })
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (mode === 'email') {
      const name = email.trim().split('@')[0] || 'Participant'
      finish(name, email.trim())
      return
    }

    if (mode === 'discord') {
      const u = discordUsername.trim().replace(/^@/, '')
      const name = u ? `@${u}` : 'Discord user'
      finish(name, email.trim() || undefined)
      return
    }

    const w = walletAddress.trim()
    const name = w ? `${w.slice(0, 6)}…${w.slice(-4)}` : 'Wallet user'
    finish(name)
  }

  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <div className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Login
          </div>
          <h1 className="h1">Access Your Account</h1>
          <p className="p">
            Participation features are subject to availability and access level. This demo uses
            local-only login to enable navigation.
          </p>
        </div>

        <div className="grid cols-2" style={{ marginTop: 18 }}>
          <div className="card">
            <div className="card-inner">
              <div className="h2">
                {mode === 'email'
                  ? 'Email login'
                  : mode === 'discord'
                    ? 'Discord login'
                    : 'Wallet login'}
              </div>
              <form onSubmit={onSubmit} className="form">
                {mode === 'email' ? (
                  <label className="label">
                    Email
                    <input
                      className="input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      required
                    />
                  </label>
                ) : null}

                {mode === 'discord' ? (
                  <>
                    <label className="label">
                      Discord username
                      <input
                        className="input"
                        value={discordUsername}
                        onChange={(e) => setDiscordUsername(e.target.value)}
                        placeholder="username"
                        inputMode="text"
                        required
                      />
                    </label>
                    <label className="label">
                      Email (optional)
                      <input
                        className="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@domain.com"
                      />
                    </label>
                    <p className="p muted-2" style={{ fontSize: 13 }}>
                      Note: This demo does not perform Discord OAuth. It records a local session for
                      navigation.
                    </p>
                  </>
                ) : null}

                {mode === 'wallet' ? (
                  <>
                    <label className="label">
                      Wallet address
                      <input
                        className="input"
                        value={walletAddress}
                        onChange={(e) => setWalletAddress(e.target.value)}
                        placeholder="0x…"
                        inputMode="text"
                        required
                      />
                    </label>
                    <p className="p muted-2" style={{ fontSize: 13 }}>
                      Note: This demo does not connect to a wallet provider. It records a local
                      session for navigation.
                    </p>
                  </>
                ) : null}
                <div className="btn-row">
                  <button className="btn btn-primary" type="submit">
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="h2">Other options</div>
              <p className="p">Wallet and Discord login can be offered based on access level.</p>
              <div className="btn-row">
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={() => setMode('wallet')}
                >
                  Wallet login
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={() => setMode('discord')}
                >
                  Discord login
                </button>
              </div>
              <div style={{ height: 12 }} />
              <p className="p muted-2" style={{ fontSize: 13 }}>
                XP reflects participation only. Mechanisms may be updated as the system evolves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

