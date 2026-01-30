import { Link } from 'react-router-dom'

export function Landing() {
  return (
    <div className="page">
      <div className="container">
        <div className="hero hero-dev">
          <div className="hero-bg" aria-hidden="true">
            <div className="hero-grid" />
            <div className="hero-lines" />
            <div className="hero-glow" />
          </div>

          <div className="hero-left">
            <div className="eyebrow">
              <span className="dot" aria-hidden="true" />
              SimulationsAI
              <span className="hero-tag">[ The Infrastructure of Tomorrow ]</span>
            </div>

            <h1 className="h1 hero-title">
              The Decentralized Coordination Layer for Real-Time AI Environments.
            </h1>

            <p className="p hero-sub">
              SimulationsAI provides a high-performance, distributed simulation framework designed
              to power the next generation of AI-driven execution environments. We bridge the gap
              between raw compute and intelligent application.
            </p>

            <div className="btn-row">
              <Link className="btn btn-primary" to="/waitlist">
                🛰️ ENTER ALPHA
              </Link>
              <Link className="btn btn-secondary" to="/litepaper">
                📄 READ LITEPAPER
              </Link>
            </div>

            <div className="card hero-card" style={{ marginTop: 18 }}>
              <div className="card-inner">
                <div className="card-title">
                  <div className="h2" style={{ margin: 0 }}>
                    Network Statistics
                  </div>
                  <span className="badge">Live</span>
                </div>

                <div className="grid cols-3">
                  <div className="kpi">
                    <div className="kpi-label">Uptime</div>
                    <div className="kpi-value">99.9%</div>
                    <div className="muted-2" style={{ marginTop: 6, fontSize: 12 }}>
                      [TRACKING]
                    </div>
                  </div>
                  <div className="kpi">
                    <div className="kpi-label">Nodes Active</div>
                    <div className="kpi-value">—</div>
                    <div className="muted-2" style={{ marginTop: 6, fontSize: 12 }}>
                      [PROCESSING]
                    </div>
                  </div>
                  <div className="kpi">
                    <div className="kpi-label">Simulations Executed</div>
                    <div className="kpi-value">—</div>
                    <div className="muted-2" style={{ marginTop: 6, fontSize: 12 }}>
                      Rolling counter
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="card hero-card">
              <div className="card-inner">
                <div className="card-title">
                  <div className="h2" style={{ margin: 0 }}>
                    Core Pillars
                  </div>
                  <span className="badge badge-accent">Structure</span>
                </div>

                <div className="grid" style={{ marginTop: 12 }}>
                  <div className="hero-bullet">
                    <div className="hero-bullet-title">Decentralized Intelligence</div>
                    <div className="muted">
                      No single point of failure. A globally distributed network of Lite and Ultra
                      nodes.
                    </div>
                  </div>
                  <div className="hero-bullet">
                    <div className="hero-bullet-title">Contribution-First</div>
                    <div className="muted">
                      Participation is earned through uptime and task validation, measured by
                      non-transferable XP.
                    </div>
                  </div>
                  <div className="hero-bullet">
                    <div className="hero-bullet-title">AI-Monitored Integrity</div>
                    <div className="muted">
                      An automated layer detects anomalies and supports fair resource distribution
                      in real-time.
                    </div>
                  </div>
                </div>

                <div className="card" style={{ marginTop: 14, boxShadow: 'none' }}>
                  <div className="card-inner">
                    <div className="h2" style={{ marginBottom: 8 }}>
                      Join the Evolution
                    </div>
                    <p className="p">
                      Early followers shape the network. Get priority access to Alpha testing and
                      early-stage network incentives.
                    </p>
                    <p className="p muted-2" style={{ marginTop: 10, fontSize: 13 }}>
                      Stay Early.
                    </p>
                    <div className="btn-row" style={{ marginTop: 14 }}>
                      <Link className="btn btn-primary" to="/waitlist">
                        Join waitlist
                      </Link>
                      <Link className="btn btn-secondary" to="/how-it-works">
                        How it works
                      </Link>
                    </div>
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

