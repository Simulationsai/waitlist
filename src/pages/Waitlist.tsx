import { useState, type FormEvent } from 'react'

export function Waitlist() {
  const [email, setEmail] = useState('')
  const [wallet, setWallet] = useState('')
  const [twitter, setTwitter] = useState('')
  const [discord, setDiscord] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    setSubmitted(false)

    const apiBase = (import.meta as { env?: Record<string, string> }).env?.VITE_API_BASE_URL
    try {
      if (apiBase) {
        const res = await fetch(`${apiBase.replace(/\/$/, '')}/waitlist`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, wallet, twitter, discord }),
        })
        if (!res.ok) {
          const data = (await res.json().catch(() => null)) as { error?: string } | null
          throw new Error(data?.error || 'Submission failed')
        }
      }
      setSubmitted(true)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Submission failed')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <div className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Waitlist
          </div>
          <h1 className="h1">Early Participation Access</h1>
          <p className="p">
            Access to SimulationsAI is being released gradually. Join the waitlist to receive
            updates, be considered for Alpha access, and participate early in shaping the platform.
          </p>
        </div>

        <div className="grid cols-2" style={{ marginTop: 18 }}>
          <div className="card">
            <div className="card-inner">
              <div className="h2">Join the waitlist</div>

              <form onSubmit={onSubmit} className="form">
                <label className="label">
                  Email address
                  <input
                    className="input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    required
                  />
                </label>

                <label className="label">
                  Wallet address
                  <input
                    className="input"
                    value={wallet}
                    onChange={(e) => setWallet(e.target.value)}
                    placeholder="0x…"
                    inputMode="text"
                    required
                  />
                </label>

                <label className="label">
                  Twitter / X handle
                  <input
                    className="input"
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                    placeholder="@handle"
                    inputMode="text"
                    required
                  />
                </label>

                <label className="label">
                  Discord username
                  <input
                    className="input"
                    value={discord}
                    onChange={(e) => setDiscord(e.target.value)}
                    placeholder="username"
                    inputMode="text"
                    required
                  />
                </label>

                <div className="btn-row">
                  <button className="btn btn-primary" type="submit" disabled={submitting}>
                    {submitting ? 'Submitting…' : 'Submit'}
                  </button>
                </div>

                <p className="p muted-2" style={{ marginTop: 12, fontSize: 13 }}>
                  Submitting the waitlist form does not guarantee access.
                </p>

                {error ? <div className="notice" role="status">{error}</div> : null}

                {submitted ? (
                  <div className="notice" role="status" aria-live="polite">
                    Submitted. If a backend is configured, your submission is stored for review.
                  </div>
                ) : null}
              </form>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="h2">What to expect</div>
              <ul className="list">
                <li>Periodic updates as releases progress</li>
                <li>Potential Alpha invitations as capacity allows</li>
                <li>Opportunities to provide early feedback</li>
              </ul>
              <div style={{ height: 12 }} />
              <p className="p">
                Participation features are subject to availability and may vary by access level.
                Submitting the waitlist form does not guarantee access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

