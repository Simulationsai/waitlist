export function XPOverview() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <div className="eyebrow">
            <span className="dot" aria-hidden="true" />
            XP
          </div>
          <h1 className="h1">Understanding XP</h1>
          <p className="p">
            XP represents your participation history. XP is earned through contribution activities,
            infrastructure uptime, and approved participation actions.
          </p>
        </div>

        <div className="grid cols-2" style={{ marginTop: 18 }}>
          <div className="card">
            <div className="card-inner">
              <div className="h2">What XP is used for</div>
              <p className="p">
                XP is used internally to evaluate participation and reliability. XP may be required
                for future eligibility checks.
              </p>
              <div style={{ height: 12 }} />
              <ul className="list">
                <li>Non-transferable</li>
                <li>Not guaranteed</li>
                <li>Subject to change</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="h2">How XP is earned</div>
              <ul className="list">
                <li>Contribution activities</li>
                <li>Infrastructure uptime</li>
                <li>Approved participation actions</li>
              </ul>
              <p className="p" style={{ marginTop: 10 }}>
                Validation rules and limits apply, and may be updated over time.
              </p>
            </div>
          </div>
        </div>

        <p className="p muted-2" style={{ marginTop: 14, fontSize: 13 }}>
          XP does not represent ownership and does not imply financial return.
        </p>
      </div>
    </div>
  )
}

