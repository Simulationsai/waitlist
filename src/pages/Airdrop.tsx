export function Airdrop() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <div className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Read-only
          </div>
          <h1 className="h1">Participation-Based Eligibility</h1>
          <p className="p">
            Future distributions, if any, will prioritize consistent contributors, reliable node
            operators, and long-term participants.
          </p>
        </div>

        <div className="grid cols-2" style={{ marginTop: 18 }}>
          <div className="card">
            <div className="card-inner">
              <div className="h2">What is prioritized</div>
              <ul className="list">
                <li>Consistent contributors</li>
                <li>Reliable node operators</li>
                <li>Long-term participants</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="h2">What is not provided</div>
              <ul className="list">
                <li>No allocation values</li>
                <li>No timelines</li>
                <li>No guarantees</li>
              </ul>
              <p className="p" style={{ marginTop: 10 }}>
                Eligibility rules may evolve.
              </p>
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: 16 }}>
          <div className="card-inner">
            <div className="h2">Notes</div>
            <p className="p">
              This page is informational and may be updated. Participation does not constitute
              investment, and participation signals do not represent ownership or financial return.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

