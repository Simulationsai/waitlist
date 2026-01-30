export function Settings() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <div className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Settings
          </div>
          <h1 className="h1">Account Settings</h1>
          <p className="p">
            Manage your profile details, connected accounts, notification preferences, and security
            settings.
          </p>
        </div>

        <div className="grid cols-2" style={{ marginTop: 18 }}>
          <div className="card">
            <div className="card-inner">
              <div className="h2">Profile details</div>
              <div className="form">
                <label className="label">
                  Display name
                  <input className="input" placeholder="Participant" />
                </label>
                <label className="label">
                  Email
                  <input className="input" placeholder="name@domain.com" />
                </label>
                <div className="btn-row">
                  <button className="btn btn-primary" type="button">
                    Save
                  </button>
                </div>
                <p className="p muted-2" style={{ marginTop: 0, fontSize: 13 }}>
                  This demo build does not store changes server-side.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="h2">Connections & preferences</div>
              <div className="table" style={{ marginTop: 12 }}>
                <div className="row">
                  <div>
                    <div className="row-title">Connected wallet</div>
                    <div className="muted-2 row-sub">Optional</div>
                  </div>
                  <div className="row-right">
                    <div className="row-title">Not connected</div>
                    <div className="muted-2 row-sub">Status</div>
                  </div>
                </div>
                <div className="row">
                  <div>
                    <div className="row-title">Discord</div>
                    <div className="muted-2 row-sub">Optional</div>
                  </div>
                  <div className="row-right">
                    <div className="row-title">Not connected</div>
                    <div className="muted-2 row-sub">Status</div>
                  </div>
                </div>
                <div className="row">
                  <div>
                    <div className="row-title">Notifications</div>
                    <div className="muted-2 row-sub">Updates and access notices</div>
                  </div>
                  <div className="row-right">
                    <div className="row-title">Enabled</div>
                    <div className="muted-2 row-sub">Default</div>
                  </div>
                </div>
              </div>

              <div className="btn-row">
                <button className="btn btn-secondary" type="button">
                  Manage connections
                </button>
                <button className="btn btn-secondary" type="button">
                  Security settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

