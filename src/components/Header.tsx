import { Link, NavLink, useNavigate } from 'react-router-dom'
import logoUrl from '../assets/simulationsai-logo.png'
import { getUser, isAuthenticated, logout } from '../lib/auth'
import { useEffect, useRef, useState } from 'react'

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
    >
      {label}
    </NavLink>
  )
}

export function Header() {
  const authed = isAuthenticated()
  const navigate = useNavigate()
  const user = getUser()
  const displayName = user?.displayName || 'Profile'
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!menuRef.current) return
      if (e.target instanceof Node && !menuRef.current.contains(e.target)) setOpen(false)
    }
    window.addEventListener('mousedown', onDown)
    return () => window.removeEventListener('mousedown', onDown)
  }, [])

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link to="/" className="brand">
          <img className="brand-logo" src={logoUrl} alt="SimulationsAI logo" />
          <span className="brand-name">SimulationsAI</span>
        </Link>

        <nav className="nav">
          <NavItem to="/" label="Home" />
          <NavItem to="/vision" label="Vision" />
          <NavItem to="/roadmap" label="Roadmap" />
          <NavItem to="/how-it-works" label="How it works" />
          <NavItem to="/airdrop" label="Eligibility" />
          <NavItem to="/waitlist" label="Waitlist" />
          {!authed ? (
            <NavItem to="/login" label="Login" />
          ) : (
            <>
              <NavItem to="/app/dashboard" label="Dashboard" />
              <div className="profile" ref={menuRef}>
                <button
                  type="button"
                  className={`nav-link nav-link-button ${open ? 'nav-link-active' : ''}`}
                  onClick={() => setOpen((v) => !v)}
                  aria-haspopup="menu"
                  aria-expanded={open}
                >
                  {displayName}
                  <span className="chev" aria-hidden="true">
                    ▾
                  </span>
                </button>
                {open ? (
                  <div className="profile-menu" role="menu" aria-label="Profile">
                    <Link
                      to="/app/settings"
                      className="profile-item"
                      role="menuitem"
                      onClick={() => setOpen(false)}
                    >
                      Settings
                    </Link>
                    <button
                      type="button"
                      className="profile-item profile-item-danger"
                      role="menuitem"
                      onClick={() => {
                        setOpen(false)
                        logout()
                        navigate('/', { replace: true })
                      }}
                    >
                      Log out
                    </button>
                  </div>
                ) : null}
              </div>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

