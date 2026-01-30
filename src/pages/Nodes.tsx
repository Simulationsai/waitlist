export function Nodes() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <div className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Nodes
          </div>
          <h1 className="h1">Your Infrastructure Contributions</h1>
          <p className="p">
            Registered nodes, status, and uptime are shown below. Node rewards, if used, are
            performance-based.
          </p>
        </div>

        <div className="grid cols-2" style={{ marginTop: 18 }}>
          <div className="card">
            <div className="card-inner">
              <div className="card-title">
                <div className="h2" style={{ margin: 0 }}>
                  Registered nodes
                </div>
                <span className="badge badge-accent">Phased access</span>
              </div>

              <div className="table" style={{ marginTop: 14 }}>
                <div className="row">
                  <div>
                    <div className="row-title">Lite Node • #A12</div>
                    <div className="muted-2 row-sub">Status: Active • Region: Global</div>
                  </div>
                  <div className="row-right">
                    <div className="row-title">99.2%</div>
                    <div className="muted-2 row-sub">Uptime</div>
                  </div>
                </div>
                <div className="row">
                  <div>
                    <div className="row-title">Ultra Node • Not enabled</div>
                    <div className="muted-2 row-sub">Requires additional access</div>
                  </div>
                  <div className="row-right">
                    <div className="row-title">—</div>
                    <div className="muted-2 row-sub">Uptime</div>
                  </div>
                </div>
              </div>

              <p className="p muted-2" style={{ marginTop: 12, fontSize: 13 }}>
                Measurements are continuous and may vary by network conditions.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="h2">XP earned per node</div>
              <div className="kpis" style={{ marginTop: 12 }}>
                <div className="kpi">
                  <div className="kpi-label">Lite Node</div>
                  <div className="kpi-value">80</div>
                </div>
                <div className="kpi">
                  <div className="kpi-label">Ultra Node</div>
                  <div className="kpi-value">0</div>
                </div>
              </div>
              <p className="p" style={{ marginTop: 12 }}>
                Note: XP is a participation signal and does not represent ownership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

