import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getApiBase } from '../lib/api'
import { startDiscordLogin, startGoogleLogin, verifyWallet, getWalletNonce } from '../lib/sessionAuth'
import { useAuth } from '../components/authContext'

export function Login() {
  const [walletError, setWalletError] = useState<string | null>(null)
  const [walletBusy, setWalletBusy] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const redirectTo = (location.state as { from?: string } | null)?.from ?? '/app'
  const { user, refresh } = useAuth()

  if (user) {
    navigate(redirectTo, { replace: true })
    return null
  }

  const apiBase = getApiBase()
  const oauthEnabled = Boolean(apiBase)

  type EthereumProvider = {
    request: (args: { method: string; params?: unknown[] }) => Promise<unknown>
  }

  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <div className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Login
          </div>
          <h1 className="h1">Access Your Account</h1>
          <p className="p">
            Sign in to access participation pages. Without a valid session, dashboard and app pages
            are not accessible.
          </p>
        </div>

        <div className="grid cols-2" style={{ marginTop: 18 }}>
          <div className="card">
            <div className="card-inner">
              <div className="h2">OAuth login</div>
              <p className="p">
                Continue with an identity provider. If a provider is not configured, the button will
                not work until environment variables are set.
              </p>
              <div className="btn-row">
                <button
                  className="btn btn-primary"
                  type="button"
                  disabled={!oauthEnabled}
                  onClick={() => startGoogleLogin()}
                >
                  Continue with Google
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  disabled={!oauthEnabled}
                  onClick={() => startDiscordLogin()}
                >
                  Continue with Discord
                </button>
              </div>

              {!oauthEnabled ? (
                <p className="p muted-2" style={{ marginTop: 12, fontSize: 13 }}>
                  OAuth is not configured. Set <code>VITE_API_BASE_URL</code> in Vercel and
                  <code>FRONTEND_ORIGIN</code> plus provider keys in Render.
                </p>
              ) : null}
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="h2">Wallet login</div>
              <p className="p">
                Sign a one-time message with your wallet to create a session. This does not perform
                transactions.
              </p>

              <div className="btn-row">
                <button
                  className="btn btn-secondary"
                  type="button"
                  disabled={!oauthEnabled || walletBusy}
                  onClick={async () => {
                    setWalletError(null)
                    setWalletBusy(true)
                    try {
                      if (!oauthEnabled) throw new Error('API is not configured')
                      const eth = (window as unknown as { ethereum?: EthereumProvider }).ethereum
                      if (!eth) throw new Error('No wallet provider detected')

                      const accounts = (await eth.request({
                        method: 'eth_requestAccounts',
                      })) as string[]
                      const address = accounts?.[0]
                      if (!address) throw new Error('Wallet connection was not approved')

                      const { message } = await getWalletNonce()
                      const signature = (await eth.request({
                        method: 'personal_sign',
                        params: [message, address],
                      })) as string

                      await verifyWallet(address, signature)
                      await refresh()
                      navigate(redirectTo, { replace: true })
                    } catch (e) {
                      setWalletError(e instanceof Error ? e.message : 'Wallet login failed')
                    } finally {
                      setWalletBusy(false)
                    }
                  }}
                >
                  {walletBusy ? 'Connecting…' : 'Continue with Wallet'}
                </button>
              </div>

              {walletError ? (
                <div className="notice" role="status">
                  {walletError}
                </div>
              ) : null}

              <p className="p muted-2" style={{ fontSize: 13 }}>
                Note: A valid session is required to access participation features. XP reflects
                participation only. Mechanisms may be updated as the system evolves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

