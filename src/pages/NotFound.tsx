import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="page">
      <div className="container">
        <div className="card">
          <div className="card-inner">
            <div className="h2">Page not found</div>
            <p className="p">The page you requested does not exist.</p>
            <div className="btn-row">
              <Link className="btn btn-primary" to="/">
                Go to landing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

