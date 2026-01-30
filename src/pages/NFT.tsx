export function NFT() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <div className="eyebrow">
            <span className="dot" aria-hidden="true" />
            NFTs
          </div>
          <h1 className="h1">Participation Boost NFTs</h1>
          <p className="p">
            Certain NFTs may provide XP multipliers when staked. NFTs are optional and do not
            guarantee rewards. Minting and staking rules are subject to change.
          </p>
        </div>

        <div className="grid cols-2" style={{ marginTop: 18 }}>
          <div className="card">
            <div className="card-inner">
              <div className="h2">How it works</div>
              <ul className="list">
                <li>Multipliers apply only while actively staked</li>
                <li>NFTs do not guarantee rewards</li>
                <li>Participation rules may change</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="h2">Status</div>
              <div className="table" style={{ marginTop: 12 }}>
                <div className="row">
                  <div>
                    <div className="row-title">Staked NFTs</div>
                    <div className="muted-2 row-sub">Active stake required</div>
                  </div>
                  <div className="row-right">
                    <div className="row-title">0</div>
                    <div className="muted-2 row-sub">Count</div>
                  </div>
                </div>
                <div className="row">
                  <div>
                    <div className="row-title">Current multiplier</div>
                    <div className="muted-2 row-sub">If applicable</div>
                  </div>
                  <div className="row-right">
                    <div className="row-title">1.0×</div>
                    <div className="muted-2 row-sub">XP</div>
                  </div>
                </div>
              </div>
              <p className="p muted-2" style={{ marginTop: 12, fontSize: 13 }}>
                This page is informational in the demo build.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

