export function HowItWorks() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <div className="eyebrow">
            <span className="dot" aria-hidden="true" />
            How it works
          </div>
          <h1 className="h1">Participation and Infrastructure</h1>
          <p className="p">
            SimulationsAI coordinates participation across contribution methods, internal
            participation signals, and infrastructure measurement. Contribution options and access
            levels may change as the system evolves.
          </p>
        </div>

        <div className="card" style={{ marginTop: 18 }}>
          <div className="card-inner">
            <div className="h2">Participation model</div>
            <div className="grid cols-3" style={{ marginTop: 12 }}>
              <div className="kpi">
                <div className="kpi-label">Contribution</div>
                <div className="kpi-value">Measured</div>
                <div className="muted-2" style={{ marginTop: 6, fontSize: 12 }}>
                  Capacity, uptime, and validation rules.
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
            </div>
          </div>
        </div>

        <div className="grid cols-3" style={{ marginTop: 16 }}>
          <div className="card">
            <div className="card-inner">
              <div className="card-title">
                <div className="h2" style={{ margin: 0 }}>
                  Contribution
                </div>
                <span className="badge badge-accent">Step 1</span>
              </div>
              <p className="p">
                Participants may contribute computational resources, simulation capacity, and
                network reliability. Contribution methods vary based on access level.
              </p>
              <ul className="list">
                <li>Computational resources</li>
                <li>Simulation capacity</li>
                <li>Network reliability</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="card-title">
                <div className="h2" style={{ margin: 0 }}>
                  XP (Participation Signal)
                </div>
                <span className="badge">Step 2</span>
              </div>
              <p className="p">
                XP reflects contribution activity and reliability. XP is used internally to
                evaluate participation.
              </p>
              <ul className="list">
                <li>Non-transferable</li>
                <li>Not guaranteed</li>
                <li>Subject to change</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="card-title">
                <div className="h2" style={{ margin: 0 }}>
                  Progressive Access
                </div>
                <span className="badge">Step 3</span>
              </div>
              <p className="p">
                Higher participation may unlock additional contribution methods and eligibility
                for future programs. Potential governance access is planned and may be introduced
                later.
              </p>
              <ul className="list">
                <li>Additional contribution methods</li>
                <li>Eligibility for future programs</li>
                <li>Potential governance access (planned)</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="nodes" className="card anchor" style={{ marginTop: 16 }}>
          <div className="card-inner">
            <div className="card-title">
              <div className="h2" style={{ margin: 0 }}>
                Infrastructure contribution (nodes)
              </div>
              <span className="badge">Read-only</span>
            </div>
            <p className="p">
              SimulationsAI supports multiple contribution modes. Node availability, uptime, and
              reliability are measured continuously. Node access is phased.
            </p>

            <div className="grid cols-2" style={{ marginTop: 14 }}>
              <div className="card" style={{ boxShadow: 'none' }}>
                <div className="card-inner">
                  <div className="card-title">
                    <div className="h2" style={{ margin: 0 }}>
                      Lite Node
                    </div>
                    <span className="badge badge-accent">Low overhead</span>
                  </div>
                  <p className="p">Cloud-based participation with minimal setup.</p>
                  <ul className="list">
                    <li>Designed for gradual onboarding</li>
                    <li>Reliability measured continuously</li>
                    <li>Availability depends on access level</li>
                  </ul>
                </div>
              </div>

              <div className="card" style={{ boxShadow: 'none' }}>
                <div className="card-inner">
                  <div className="card-title">
                    <div className="h2" style={{ margin: 0 }}>
                      Ultra Node
                    </div>
                    <span className="badge">Advanced</span>
                  </div>
                  <p className="p">Docker-based advanced simulation contribution.</p>
                  <ul className="list">
                    <li>Higher operational responsibility</li>
                    <li>Performance-based measurements</li>
                    <li>Phased access and validation rules</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card" style={{ marginTop: 14, boxShadow: 'none' }}>
              <div className="card-inner">
                <div className="h2">Measurement</div>
                <div className="grid cols-3" style={{ marginTop: 12 }}>
                  <div className="kpi">
                    <div className="kpi-label">Availability</div>
                    <div className="kpi-value">Uptime</div>
                    <div className="muted-2" style={{ marginTop: 6, fontSize: 12 }}>
                      Measured continuously; may vary by network conditions.
                    </div>
                  </div>
                  <div className="kpi">
                    <div className="kpi-label">Reliability</div>
                    <div className="kpi-value">Consistency</div>
                    <div className="muted-2" style={{ marginTop: 6, fontSize: 12 }}>
                      Based on sustained operation and validation rules.
                    </div>
                  </div>
                  <div className="kpi">
                    <div className="kpi-label">Performance</div>
                    <div className="kpi-value">Quality</div>
                    <div className="muted-2" style={{ marginTop: 6, fontSize: 12 }}>
                      Evaluated against current system requirements.
                    </div>
                  </div>
                </div>
                <div style={{ height: 12 }} />
                <p className="p">
                  Measurements and participation signals may change over time and are not
                  guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: 16 }}>
          <div className="card-inner">
            <div className="h2">Important notes</div>
            <ul className="list">
              <li>Participation rules may be updated as the system evolves.</li>
              <li>XP does not represent ownership or financial return.</li>
              <li>Access levels and mechanisms are subject to availability.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

