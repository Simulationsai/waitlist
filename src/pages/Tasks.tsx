const mandatoryTasks = [
  { title: 'Follow @SimulationsAI', reward: '100 XP', status: 'Completed', earned: '100' },
  { title: 'Repost and tag', reward: '200 XP', status: 'Completed', earned: '200' },
  { title: 'Like and comment', reward: '150 XP', status: 'Completed', earned: '150' },
]

const optionalTasks = [
  { title: 'Daily like', reward: '50 XP', note: 'Once per day', status: 'Completed' },
  { title: 'Repost', reward: '75 XP', note: 'Limit applies', status: 'Available' },
]

export function Tasks() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <div className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Tasks
          </div>
          <h1 className="h1">Available Participation Tasks</h1>
          <p className="p">
            Tasks are refreshed periodically. Completion limits and validation rules apply. Abuse
            or automation may result in restrictions.
          </p>
        </div>

        <div className="card" style={{ marginTop: 18 }}>
          <div className="card-inner">
            <div className="card-title">
              <div>
                <div className="h2" style={{ margin: 0 }}>
                  Mandatory Tasks
                </div>
                <div className="muted-2" style={{ marginTop: 6, fontSize: 13 }}>
                  Complete all to qualify (if required by your access level).
                </div>
              </div>
              <span className="badge badge-accent">Mandatory</span>
            </div>

            <div className="grid cols-2" style={{ marginTop: 14 }}>
              {mandatoryTasks.map((t) => (
                <div key={t.title} className="task-card">
                  <div className="task-top">
                    <div>
                      <div className="task-title">{t.title}</div>
                      <div className="muted-2 task-sub">Reward: {t.reward}</div>
                    </div>
                    <span className={`pill ${t.status === 'Completed' ? 'pill-ok' : ''}`}>
                      {t.status}
                    </span>
                  </div>
                  <div className="task-meta">
                    <div className="muted">Earned XP: {t.earned}</div>
                    <button className="btn btn-secondary" type="button">
                      Open
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: 16 }}>
          <div className="card-inner">
            <div className="card-title">
              <div>
                <div className="h2" style={{ margin: 0 }}>
                  Optional Tasks
                </div>
                <div className="muted-2" style={{ marginTop: 6, fontSize: 13 }}>
                  Optional tasks may be offered based on access level.
                </div>
              </div>
              <span className="badge">Optional</span>
            </div>

            <div className="grid cols-2" style={{ marginTop: 14 }}>
              {optionalTasks.map((t) => (
                <div key={t.title} className="task-card">
                  <div className="task-top">
                    <div>
                      <div className="task-title">{t.title}</div>
                      <div className="muted-2 task-sub">
                        Reward: {t.reward} {t.note ? `• ${t.note}` : ''}
                      </div>
                    </div>
                    <span className={`pill ${t.status === 'Completed' ? 'pill-ok' : ''}`}>
                      {t.status}
                    </span>
                  </div>
                  <div className="task-meta">
                    <div className="muted">Validation rules apply.</div>
                    <button className="btn btn-secondary" type="button">
                      Open
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <p className="p muted-2" style={{ marginTop: 14, fontSize: 13 }}>
              Rewards shown are illustrative for this demo build and may change.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

