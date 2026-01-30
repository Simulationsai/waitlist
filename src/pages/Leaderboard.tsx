const rows = [
  { rank: 1, name: 'Participant 001', xp: 1820 },
  { rank: 2, name: 'Participant 014', xp: 1710 },
  { rank: 3, name: 'Participant 022', xp: 1640 },
  { rank: 4, name: 'Participant 031', xp: 1585 },
  { rank: 5, name: 'Participant 044', xp: 1500 },
]

export function Leaderboard() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <div className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Leaderboard
          </div>
          <h1 className="h1">Participation Rankings</h1>
          <p className="p">
            Rankings are based on XP and contribution consistency. Leaderboards reset periodically.
            Visibility may be limited to logged-in users.
          </p>
        </div>

        <div className="card" style={{ marginTop: 18 }}>
          <div className="card-inner">
            <div className="card-title">
              <div className="h2" style={{ margin: 0 }}>
                Current cycle
              </div>
              <span className="badge">Example</span>
            </div>

            <div className="table" style={{ marginTop: 14 }}>
              {rows.map((r) => (
                <div className="row" key={r.rank}>
                  <div>
                    <div className="row-title">
                      #{r.rank} • {r.name}
                    </div>
                    <div className="muted-2 row-sub">Contribution consistency</div>
                  </div>
                  <div className="row-right">
                    <div className="row-title">{r.xp} XP</div>
                    <div className="muted-2 row-sub">Total</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="p muted-2" style={{ marginTop: 12, fontSize: 13 }}>
              Rankings shown are illustrative for this demo build.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

