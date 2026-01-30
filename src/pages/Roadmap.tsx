export function Roadmap() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <div className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Roadmap
          </div>
          <h1 className="h1">Phased Release Plan</h1>
          <p className="p">
            SimulationsAI is developed and released in phases to support operational readiness and
            responsible scaling. Items and ordering may change.
          </p>
        </div>

        <div className="grid cols-2" style={{ marginTop: 18 }}>
          <div className="card">
            <div className="card-inner">
              <div className="card-title">
                <div className="h2" style={{ margin: 0 }}>
                  Phase 1 — Waitlist participation
                </div>
                <span className="badge badge-accent">Current</span>
              </div>
              <ul className="list">
                <li>Collect onboarding signals and contact preferences</li>
                <li>Define early contribution and verification rules</li>
                <li>Establish baseline reliability metrics</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="card-title">
                <div className="h2" style={{ margin: 0 }}>
                  Phase 2 — Alpha access
                </div>
                <span className="badge">Planned</span>
              </div>
              <ul className="list">
                <li>Limited onboarding for early node operators</li>
                <li>Iterate on validation rules, limits, and abuse prevention</li>
                <li>Improve reporting for contribution and uptime</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="card-title">
                <div className="h2" style={{ margin: 0 }}>
                  Phase 3 — Public registration
                </div>
                <span className="badge">Planned</span>
              </div>
              <ul className="list">
                <li>Broader onboarding with clear eligibility criteria</li>
                <li>More contribution modes based on system capacity</li>
                <li>Expanded monitoring and reliability scoring</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="card-title">
                <div className="h2" style={{ margin: 0 }}>
                  Phase 4 — Advanced contribution eligibility
                </div>
                <span className="badge">Planned</span>
              </div>
              <ul className="list">
                <li>Optional advanced node configurations for qualified operators</li>
                <li>Improved simulation workload verification</li>
                <li>Policy updates based on observed network behavior</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: 16 }}>
          <div className="card-inner">
            <div className="h2">Governance (planned)</div>
            <p className="p">
              If governance mechanisms are introduced, eligibility may be informed by participation
              history and reliability. Specific implementations and timelines are not guaranteed.
            </p>
            <p className="p muted-2" style={{ marginTop: 12, fontSize: 13 }}>
              This page is informational and subject to change.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

