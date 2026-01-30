export function About() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <div className="eyebrow">
            <span className="dot" aria-hidden="true" />
            About / Vision
          </div>
          <h1 className="h1">Why SimulationsAI Exists</h1>
          <p className="p">
            Modern digital systems increasingly rely on distributed infrastructure. However,
            participation today is often fragmented, opaque, or incentive-misaligned.
          </p>
        </div>

        <div className="grid cols-2" style={{ marginTop: 18 }}>
          <div className="card">
            <div className="card-inner">
              <div className="h2">A structured participation layer</div>
              <p className="p">
                SimulationsAI introduces a structured participation layer where contributors can:
              </p>
              <ul className="list">
                <li>Provide resources responsibly</li>
                <li>Build participation history</li>
                <li>Unlock future access progressively</li>
              </ul>
              <div style={{ height: 12 }} />
              <p className="p">
                The goal is to make participation easier to understand and easier to evaluate by
                using clear contribution methods, reliability measurements, and progressive access
                rules.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="h2">Sustainability first</div>
              <p className="p">
                This project prioritizes long-term sustainability over short-term growth. Rules and
                mechanisms may be updated as the system evolves.
              </p>
              <div style={{ height: 12 }} />
              <p className="p">
                Participation signals (including XP) are used internally to evaluate contribution
                and reliability, and do not represent ownership or financial return.
              </p>
              <div style={{ height: 12 }} />
              <p className="p">
                Where appropriate, mechanisms are designed with operational safety in mind, including
                phased access, validation checks, and abuse-resistant task rules.
              </p>
            </div>
          </div>
        </div>

        <div id="vision" className="card anchor" style={{ marginTop: 16 }}>
          <div className="card-inner">
            <div className="h2">Vision</div>
            <p className="p">
              SimulationsAI’s long-term direction is to support a reliable contributor network that
              can provide compute and simulation capacity under clearly defined rules. Participation
              is intended to be transparent, progressive, and accountable over time.
            </p>
            <div style={{ height: 12 }} />
            <ul className="list">
              <li>Clear contribution methods with measurable performance and uptime</li>
              <li>Internal participation signals that reflect activity and reliability</li>
              <li>Gradual access to additional contribution modes as participation is demonstrated</li>
              <li>Future programs may be introduced as capabilities mature and policies evolve</li>
            </ul>
            <p className="p muted-2" style={{ marginTop: 12, fontSize: 13 }}>
              This page is informational. Details may change, and no outcomes are guaranteed.
            </p>
          </div>
        </div>

        <div className="card" style={{ marginTop: 16 }}>
          <div className="card-inner">
            <div className="h2">Design principles</div>
            <div className="grid cols-3" style={{ marginTop: 12 }}>
              <div className="kpi">
                <div className="kpi-label">Clarity</div>
                <div className="kpi-value">Transparent</div>
                <div className="muted-2" style={{ marginTop: 6, fontSize: 12 }}>
                  Clear participation rules and visible status where possible.
                </div>
              </div>
              <div className="kpi">
                <div className="kpi-label">Consistency</div>
                <div className="kpi-value">Measured</div>
                <div className="muted-2" style={{ marginTop: 6, fontSize: 12 }}>
                  Reliability and contribution are evaluated over time.
                </div>
              </div>
              <div className="kpi">
                <div className="kpi-label">Responsibility</div>
                <div className="kpi-value">Evolving</div>
                <div className="muted-2" style={{ marginTop: 6, fontSize: 12 }}>
                  Mechanisms are updated cautiously as requirements change.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

