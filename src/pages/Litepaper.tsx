import { useEffect } from 'react'

export function Litepaper() {
  useEffect(() => {
    document.body.classList.add('print-litepaper')
    return () => document.body.classList.remove('print-litepaper')
  }, [])

  return (
    <div className="page">
      <div className="container">
        <div className="page-head lp-head">
          <div className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Litepaper
          </div>
          <h1 className="h1">SimulationsAI – Litepaper v1.0</h1>
          <p className="p">A Decentralized Simulation Coordination Layer</p>

          <div className="btn-row lp-actions">
            <button className="btn btn-primary" type="button" onClick={() => window.print()}>
              Download PDF
            </button>
            <span className="muted-2" style={{ fontSize: 13 }}>
              Opens your browser print dialog. Choose “Save as PDF”.
            </span>
          </div>
        </div>

        <div className="card lp-card">
          <div className="card-inner lp">
            <h2 className="lp-h2">Abstract</h2>
            <p className="p">
              SimulationsAI is a decentralized simulation infrastructure project designed to
              coordinate distributed computational and simulation resources through a structured,
              contribution-first model. The system enables participants to provide verified
              simulation capacity while maintaining transparency, progressive access, and
              non-financial participation signals. SimulationsAI focuses on responsible scaling,
              infrastructure reliability, and long-term network sustainability.
            </p>

            <h2 className="lp-h2">1. Introduction</h2>
            <p className="p">
              Modern digital systems increasingly depend on simulation-intensive workloads such as
              optimization modeling, environment testing, and AI system validation. Centralized
              infrastructure struggles to scale efficiently, while existing decentralized models
              often misalign incentives and participation quality. SimulationsAI introduces a
              coordination layer that prioritizes quality, integrity, and gradual access over
              speculative growth.
            </p>

            <h2 className="lp-h2">2. Vision</h2>
            <p className="p">The vision of SimulationsAI is a globally distributed network where:</p>
            <ul className="list">
              <li>Participation is earned through measurable contribution.</li>
              <li>Access expands progressively based on network stability.</li>
              <li>Incentives are tied to real system value.</li>
              <li>Governance emerges organically over time.</li>
            </ul>

            <h2 className="lp-h2">3. Strategic Definitions</h2>
            <div className="lp-table">
              <div className="lp-th">What SimulationsAI IS</div>
              <div className="lp-th">What SimulationsAI IS NOT</div>
              <div className="lp-td">Distributed simulation infrastructure</div>
              <div className="lp-td">A speculative financial product</div>
              <div className="lp-td">Contribution-based participation</div>
              <div className="lp-td">A guaranteed reward platform</div>
              <div className="lp-td">Non-custodial, user-operated network</div>
              <div className="lp-td">A consumer entertainment product</div>
              <div className="lp-td">An evolving coordination protocol</div>
              <div className="lp-td">A centralized service</div>
            </div>

            <h2 className="lp-h2">4. Network Overview</h2>
            <p className="p">SimulationsAI operates through multiple independent participation layers:</p>
            <ul className="list">
              <li>Lite Nodes: Cloud-based participation with minimal setup.</li>
              <li>Ultra Nodes: Docker-based advanced simulation contributors.</li>
              <li>Task Layer: Verified participation actions and computations.</li>
              <li>AI Simulation Layer: Monitors performance, reliability, and anomaly detection.</li>
            </ul>

            <h2 className="lp-h2">5. Contribution & XP System</h2>
            <p className="p">
              XP represents a non-transferable participation signal. It is used internally for
              access evaluation and eligibility.
            </p>
            <ul className="list">
              <li>
                How to Earn: Running nodes, completing tasks, maintaining uptime, and community
                contributions.
              </li>
              <li>
                Key Constraints: XP is not a financial asset, cannot be traded, and does not
                guarantee rewards.
              </li>
            </ul>

            <h2 className="lp-h2">6. Progressive Access Model</h2>
            <p className="p">To ensure system readiness, access is released in phases:</p>
            <ol className="lp-ol">
              <li>Waitlist Participation</li>
              <li>Alpha Access</li>
              <li>Public Registration</li>
              <li>Advanced Contribution Eligibility</li>
            </ol>

            <h2 className="lp-h2">7. Incentives & Airdrop Framework</h2>
            <p className="p">
              Future distributions, if any, prioritize Consistent Contributors, Long-term
              Participation, and Network Reliability. No specific values or timelines are
              guaranteed, and eligibility rules remain dynamic.
            </p>

            <h2 className="lp-h2">8. NFT Participation Boosts</h2>
            <p className="p">
              Optional NFTs may provide XP multipliers when actively staked. NFTs are optional, do
              not represent ownership, and do not guarantee rewards.
            </p>

            <h2 className="lp-h2">9. Referral System</h2>
            <p className="p">
              Designed to reward quality over quantity. Benefits are capped, diminish over time,
              and may be monitored to prevent volume-based exploitation.
            </p>

            <h2 className="lp-h2">10. AI & Simulation Intelligence</h2>
            <p className="p">An automated layer continuously monitors the network to:</p>
            <ul className="list">
              <li>Detect anomalous behavior.</li>
              <li>Adjust XP weighting to preserve fairness.</li>
              <li>Ensure all adjustments are gradual and reversible.</li>
            </ul>

            <h2 className="lp-h2">11. Privacy & Governance</h2>
            <ul className="list">
              <li>
                Data Handling: No collection of personal data beyond authentication; data is
                anonymized and purpose-limited.
              </li>
              <li>
                Future Governance: Mechanisms may be introduced at network maturity, with
                eligibility informed by participation history.
              </li>
            </ul>

            <h2 className="lp-h2">12. Legal & Compliance Note</h2>
            <p className="p">
              SimulationsAI is a technology coordination platform. Participation does not
              constitute investment. XP does not represent ownership or financial return. All
              mechanisms are subject to modification.
            </p>

            <h2 className="lp-h2">13. Conclusion</h2>
            <p className="p">
              SimulationsAI grows deliberately, valuing system integrity over speed. By aligning
              contribution with participation, the network is designed to support sustainable
              infrastructure that evolves alongside its participants.
            </p>

            <p className="p muted-2" style={{ marginTop: 14, fontSize: 13 }}>
              This litepaper is informational only and subject to change.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

