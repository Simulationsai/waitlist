import { Link, NavLink, useNavigate } from 'react-router-dom'
import logoUrl from '../assets/simulationsai-logo.png'
import { useEffect, useRef, useState } from 'react'
import { useAuth } from './authContext'

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
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const displayName = user?.displayName || 'Profile'
  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!menuRef.current) return
      if (e.target instanceof Node && !menuRef.current.contains(e.target)) setOpen(false)
    }
    window.addEventListener('mousedown', onDown)
    return () => window.removeEventListener('mousedown', onDown)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link to="/" className="brand">
          <img className="brand-logo" src={logoUrl} alt="SimulationsAI logo" />
          <span className="brand-name">SimulationsAI</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="nav-toggle-icon" aria-hidden="true" />
        </button>

        <nav className="nav">
          <NavItem to="/" label="Home" />
          <NavItem to="/vision" label="Vision" />
          <NavItem to="/roadmap" label="Roadmap" />
          <NavItem to="/how-it-works" label="How it works" />
          <NavItem to="/airdrop" label="Eligibility" />
          <NavItem to="/waitlist" label="Waitlist" />
          {!user ? (
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
                        logout().finally(() => navigate('/', { replace: true }))
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

      {mobileOpen ? (
        <div
          className="mobile-nav-overlay"
          role="presentation"
          onClick={() => setMobileOpen(false)}
        >
          <div className="mobile-nav" role="dialog" aria-label="Navigation" aria-modal="true">
            <div className="mobile-nav-head">
              <div className="mobile-brand">
                <img className="brand-logo" src={logoUrl} alt="SimulationsAI logo" />
                <div>
                  <div className="mobile-brand-name">SimulationsAI</div>
                  <div className="muted-2" style={{ fontSize: 12 }}>
                    Menu
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="nav-link nav-link-button"
                onClick={() => setMobileOpen(false)}
              >
                Close
              </button>
            </div>

            <div className="mobile-nav-links">
              <NavLink to="/" className="mobile-link" onClick={() => setMobileOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/vision" className="mobile-link" onClick={() => setMobileOpen(false)}>
                Vision
              </NavLink>
              <NavLink to="/roadmap" className="mobile-link" onClick={() => setMobileOpen(false)}>
                Roadmap
              </NavLink>
              <NavLink
                to="/how-it-works"
                className="mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                How it works
              </NavLink>
              <NavLink to="/airdrop" className="mobile-link" onClick={() => setMobileOpen(false)}>
                Eligibility
              </NavLink>
              <NavLink to="/waitlist" className="mobile-link" onClick={() => setMobileOpen(false)}>
                Waitlist
              </NavLink>
              {!user ? (
                <NavLink to="/login" className="mobile-link" onClick={() => setMobileOpen(false)}>
                  Login
                </NavLink>
              ) : (
                <>
                  <NavLink
                    to="/app/dashboard"
                    className="mobile-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    to="/app/settings"
                    className="mobile-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    Settings
                  </NavLink>
                  <button
                    type="button"
                    className="mobile-link mobile-link-button"
                    onClick={() => {
                      setMobileOpen(false)
                      logout().finally(() => navigate('/', { replace: true }))
                    }}
                  >
                    Log out ({displayName})
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}

