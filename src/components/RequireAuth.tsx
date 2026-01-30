import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from './authContext'

export function RequireAuth() {
  const location = useLocation()
  const { loading, user } = useAuth()

  if (loading) {
    return (
      <div className="page">
        <div className="container">
          <div className="card">
            <div className="card-inner">
              <div className="h2">Checking session…</div>
              <p className="p">Please wait.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }
  return <Outlet />
}

