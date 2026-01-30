export function NodesOverview() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <div className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Node overview (read-only)
          </div>
          <h1 className="h1">Infrastructure Contribution</h1>
          <p className="p">
            SimulationsAI supports multiple contribution modes. Node availability, uptime, and
            reliability are measured continuously. Node access is phased.
          </p>
        </div>

        <div className="grid cols-2" style={{ marginTop: 18 }}>
          <div className="card">
            <div className="card-inner">
              <div className="card-title">
                <div className="h2" style={{ margin: 0 }}>
                  Lite Node
                </div>
                <span className="badge badge-accent">Low overhead</span>
              </div>
              <p className="p">Cloud-based, low overhead participation.</p>
              <div style={{ height: 12 }} />
              <ul className="list">
                <li>Designed for gradual onboarding</li>
                <li>Reliability measured continuously</li>
                <li>Availability depends on access level</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="card-title">
                <div className="h2" style={{ margin: 0 }}>
                  Ultra Node
                </div>
                <span className="badge">Advanced</span>
              </div>
              <p className="p">Docker-based, advanced contribution.</p>
              <div style={{ height: 12 }} />
              <ul className="list">
                <li>Higher operational responsibility</li>
                <li>Performance-based measurements</li>
                <li>Phased access and validation rules</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: 16 }}>
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
              Participation signals may change over time and are not guaranteed. Node rewards, if
              used, are performance-based and subject to modification.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

