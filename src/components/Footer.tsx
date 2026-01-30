import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <div className="footer-cols">
          <div>
            <div className="footer-title">SimulationsAI</div>
            <p className="p footer-text">
              SimulationsAI is an evolving infrastructure coordination platform.
            </p>
          </div>

          <div>
            <div className="footer-title">Explore</div>
            <div className="footer-links">
              <Link to="/vision">Vision</Link>
              <Link to="/roadmap">Roadmap</Link>
              <Link to="/how-it-works">How it works</Link>
              <Link to="/litepaper">Litepaper</Link>
              <Link to="/airdrop">Eligibility</Link>
              <Link to="/waitlist">Waitlist</Link>
            </div>
          </div>

          <div>
            <div className="footer-title">Access</div>
            <div className="footer-links">
              <Link to="/login">Login</Link>
              <Link to="/app/dashboard">Dashboard</Link>
              <Link to="/app/settings">Settings</Link>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-disclaimer">
          <div className="footer-title">Disclaimer</div>
          <p className="p footer-text">
            Participation does not constitute investment. XP does not represent ownership or
            financial return. All mechanisms are subject to modification.
          </p>
        </div>
      </div>
    </footer>
  )
}

