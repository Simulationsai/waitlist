import { useMemo, useState } from 'react'

export function Referrals() {
  const [copied, setCopied] = useState(false)
  const code = useMemo(() => 'SIMAI-7H2K9', [])

  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <div className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Referrals
          </div>
          <h1 className="h1">Invite Participants</h1>
          <p className="p">
            Participants may invite others to join SimulationsAI. Referral benefits are designed to
            reward genuine participation, discourage abuse, and may diminish over time. Referrals
            may be monitored for quality.
          </p>
        </div>

        <div className="grid cols-2" style={{ marginTop: 18 }}>
          <div className="card">
            <div className="card-inner">
              <div className="h2">Your referral code</div>
              <div className="codebox" style={{ marginTop: 12 }}>
                <div className="code">{code}</div>
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(code)
                      setCopied(true)
                      window.setTimeout(() => setCopied(false), 1200)
                    } catch {
                      setCopied(false)
                    }
                  }}
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <p className="p muted-2" style={{ marginTop: 12, fontSize: 13 }}>
                Referral rules may change. Quality and abuse checks may apply.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="h2">Referral activity</div>
              <div className="kpis" style={{ marginTop: 12 }}>
                <div className="kpi">
                  <div className="kpi-label">Invites sent</div>
                  <div className="kpi-value">0</div>
                </div>
                <div className="kpi">
                  <div className="kpi-label">Qualified invites</div>
                  <div className="kpi-value">0</div>
                </div>
              </div>
              <p className="p" style={{ marginTop: 12 }}>
                Referral benefits, if used, are designed to reward genuine participation and
                discourage abuse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

