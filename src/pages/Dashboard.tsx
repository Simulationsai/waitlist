import { Link } from 'react-router-dom'

export function Dashboard() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <div className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Dashboard
          </div>
          <h1 className="h1">Participation Overview</h1>
          <p className="p">
            XP is not a transferable asset and does not represent ownership. Values shown here are
            placeholders for this demo build.
          </p>
        </div>

        <div className="kpis" style={{ marginTop: 18 }}>
          <div className="kpi">
            <div className="kpi-label">Total XP</div>
            <div className="kpi-value">450</div>
          </div>
          <div className="kpi">
            <div className="kpi-label">Pending XP</div>
            <div className="kpi-value">120</div>
          </div>
          <div className="kpi">
            <div className="kpi-label">Claimed XP</div>
            <div className="kpi-value">330</div>
          </div>
          <div className="kpi">
            <div className="kpi-label">Active nodes</div>
            <div className="kpi-value">1</div>
          </div>
        </div>

        <div className="grid cols-2" style={{ marginTop: 16 }}>
          <div className="card">
            <div className="card-inner">
              <div className="card-title">
                <div className="h2" style={{ margin: 0 }}>
                  Contribution history
                </div>
                <span className="badge">Recent</span>
              </div>
              <div className="table">
                <div className="row">
                  <div>
                    <div className="row-title">Infrastructure uptime</div>
                    <div className="muted-2 row-sub">Node contribution</div>
                  </div>
                  <div className="row-right">
                    <div className="row-title">+80 XP</div>
                    <div className="muted-2 row-sub">Validated</div>
                  </div>
                </div>
                <div className="row">
                  <div>
                    <div className="row-title">Approved participation task</div>
                    <div className="muted-2 row-sub">Task completion</div>
                  </div>
                  <div className="row-right">
                    <div className="row-title">+150 XP</div>
                    <div className="muted-2 row-sub">Validated</div>
                  </div>
                </div>
                <div className="row">
                  <div>
                    <div className="row-title">Simulation capacity</div>
                    <div className="muted-2 row-sub">Measured contribution</div>
                  </div>
                  <div className="row-right">
                    <div className="row-title">+220 XP</div>
                    <div className="muted-2 row-sub">Pending</div>
                  </div>
                </div>
              </div>

              <div className="btn-row">
                <Link className="btn btn-secondary" to="/app/nodes">
                  View nodes
                </Link>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="h2">Quick links</div>
              <p className="p">Explore the participation-related pages available to your account.</p>
              <div className="grid" style={{ marginTop: 12 }}>
                <Link className="btn btn-secondary" to="/app/tasks">
                  View tasks
                </Link>
                <Link className="btn btn-secondary" to="/app/xp">
                  Understanding XP
                </Link>
                <Link className="btn btn-secondary" to="/app/referrals">
                  Referrals
                </Link>
                <Link className="btn btn-secondary" to="/app/leaderboard">
                  Leaderboard
                </Link>
                <Link className="btn btn-secondary" to="/app/settings">
                  Settings
                </Link>
              </div>
            </div>
          </div>
        </div>

        <p className="p muted-2" style={{ marginTop: 14, fontSize: 13 }}>
          Note: XP is an internal participation signal. It is non-transferable, not guaranteed, and
          subject to change.
        </p>
      </div>
    </div>
  )
}

