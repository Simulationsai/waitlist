import { Link } from 'react-router-dom'

export function AppHome() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <div className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Logged-in home
          </div>
          <h1 className="h1">Welcome to SimulationsAI</h1>
          <p className="p">
            Before participating, please review how the system works. XP reflects participation
            only. Rules may be updated as the system evolves.
          </p>
        </div>

        <div className="grid cols-3" style={{ marginTop: 18 }}>
          <div className="card">
            <div className="card-inner">
              <div className="h2">View Participation Logic</div>
              <p className="p">Understand contribution, XP, and progressive access.</p>
              <div className="btn-row">
                <Link className="btn btn-secondary" to="/how-it-works">
                  Open
                </Link>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="h2">Explore Contribution Options</div>
              <p className="p">See node contribution modes and what access levels enable.</p>
              <div className="btn-row">
                <Link className="btn btn-secondary" to="/how-it-works#nodes">
                  Open
                </Link>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="h2">Proceed to Dashboard</div>
              <p className="p">Review your participation overview and history.</p>
              <div className="btn-row">
                <Link className="btn btn-primary" to="/app/dashboard">
                  Go to dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

