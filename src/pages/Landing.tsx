import { Link } from 'react-router-dom'

export function Landing() {
  return (
    <div className="page">
      <div className="container">
        <div className="hero">
          <div>
            <div className="eyebrow">
              <span className="dot" aria-hidden="true" />
              Distributed participation
            </div>
            <h1 className="h1">A New Way to Participate in Distributed Infrastructure</h1>
            <p className="p hero-sub">
              SimulationsAI enables individuals to contribute compute and simulation capacity
              in a structured, transparent, and progressive manner.
            </p>

            <div className="btn-row">
              <Link className="btn btn-primary" to="/waitlist">
                Join the Early Access Waitlist
              </Link>
              <Link className="btn btn-secondary" to="/how-it-works">
                Learn How It Works
              </Link>
            </div>

            <div className="hero-bullets">
              <div className="hero-bullet">
                <div className="hero-bullet-title">Participation is earned</div>
                <div className="muted">Through measurable contribution and reliability.</div>
              </div>
              <div className="hero-bullet">
                <div className="hero-bullet-title">Access is unlocked gradually</div>
                <div className="muted">Progression reflects demonstrated participation.</div>
              </div>
              <div className="hero-bullet">
                <div className="hero-bullet-title">Rules evolve responsibly</div>
                <div className="muted">Mechanisms may be updated as the system matures.</div>
              </div>
            </div>
          </div>

          <div className="card hero-card">
            <div className="card-inner">
              <div className="card-title">
                <div>
                  <div className="h2" style={{ margin: 0 }}>
                    Participation at a glance
                  </div>
                  <div className="muted" style={{ marginTop: 6 }}>
                    A structured path from contribution to access.
                  </div>
                </div>
                <span className="badge badge-accent">Read-only</span>
              </div>

              <div className="grid" style={{ marginTop: 14 }}>
                <div className="kpi">
                  <div className="kpi-label">Contribution</div>
                  <div className="kpi-value">Measured</div>
                  <div className="muted-2" style={{ marginTop: 6, fontSize: 12 }}>
                    Based on capacity, uptime, and validation rules.
                  </div>
                </div>
                <div className="kpi">
                  <div className="kpi-label">XP</div>
                  <div className="kpi-value">Internal signal</div>
                  <div className="muted-2" style={{ marginTop: 6, fontSize: 12 }}>
                    Non-transferable and subject to change.
                  </div>
                </div>
                <div className="kpi">
                  <div className="kpi-label">Access</div>
                  <div className="kpi-value">Progressive</div>
                  <div className="muted-2" style={{ marginTop: 6, fontSize: 12 }}>
                    Contribution methods vary by level.
                  </div>
                </div>
                <div className="kpi">
                  <div className="kpi-label">Governance</div>
                  <div className="kpi-value">Planned</div>
                  <div className="muted-2" style={{ marginTop: 6, fontSize: 12 }}>
                    Potential future access, if introduced.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid cols-2">
            <div className="card">
              <div className="card-inner">
                <div className="h2">Why SimulationsAI Exists</div>
                <p className="p">
                  Modern digital systems increasingly rely on distributed infrastructure.
                  However, participation today is often fragmented, opaque, or incentive-misaligned.
                </p>
                <div style={{ height: 12 }} />
                <p className="p">
                  SimulationsAI introduces a structured participation layer where contributors can
                  provide resources responsibly, build participation history, and unlock future
                  access progressively.
                </p>
                <div className="btn-row" style={{ marginTop: 14 }}>
                  <Link className="btn btn-secondary" to="/vision">
                    Read the vision
                  </Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-inner">
                <div className="h2">Infrastructure Contribution</div>
                <p className="p">
                  SimulationsAI supports multiple contribution modes. Node availability, uptime,
                  and reliability are measured continuously. Access is phased.
                </p>
                <div style={{ height: 14 }} />
                <div className="grid">
                  <div className="mini-row">
                    <span className="badge badge-accent">Lite Node</span>
                    <span className="muted">Cloud-based, low overhead participation.</span>
                  </div>
                  <div className="mini-row">
                    <span className="badge">Ultra Node</span>
                    <span className="muted">Docker-based, advanced contribution.</span>
                  </div>
                </div>
                <div className="btn-row" style={{ marginTop: 14 }}>
                  <Link className="btn btn-secondary" to="/how-it-works#nodes">
                    View node overview
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid cols-2">
            <div className="card">
              <div className="card-inner">
                <div className="h2">Vision</div>
                <p className="p">
                  SimulationsAI’s long-term direction is to support a reliable contributor network
                  that can provide compute and simulation capacity under clearly defined rules.
                </p>
                <div style={{ height: 12 }} />
                <p className="p">
                  Participation is intended to be transparent, progressive, and accountable over
                  time. Details may change.
                </p>
                <div className="btn-row">
                  <Link className="btn btn-secondary" to="/vision">
                    View Vision
                  </Link>
                  <Link className="btn btn-secondary" to="/roadmap">
                    View Roadmap
                  </Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-inner">
                <div className="h2">Litepaper</div>
                <p className="p">
                  Read the SimulationsAI Litepaper v1.0 for an overview of the network model,
                  contribution layers, progressive access, and compliance notes.
                </p>
                <div style={{ height: 12 }} />
                <p className="p muted-2" style={{ fontSize: 13 }}>
                  Informational only and subject to change.
                </p>
                <div className="btn-row">
                  <Link className="btn btn-primary" to="/litepaper">
                    Open Litepaper
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="card">
            <div className="card-inner cta">
              <div>
                <div className="h2">Early Participation Access</div>
                <p className="p">
                  Access to SimulationsAI is being released gradually. Submitting the waitlist form
                  does not guarantee access.
                </p>
              </div>
              <div className="btn-row" style={{ marginTop: 0 }}>
                <Link className="btn btn-primary" to="/waitlist">
                  Join waitlist
                </Link>
                <Link className="btn btn-secondary" to="/login">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

