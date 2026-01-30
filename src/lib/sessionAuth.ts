import { apiJson, getApiBase } from './api'

export type SessionUser = {
  provider?: 'google' | 'discord' | 'wallet'
  id?: string
  displayName: string
  email?: string
}

export async function getMe(): Promise<SessionUser | null> {
  try {
    const data = await apiJson<{ ok: boolean; user: SessionUser }>('/auth/me')
    return data.user
  } catch {
    return null
  }
}

export async function logout(): Promise<void> {
  try {
    await apiJson<{ ok: boolean }>('/auth/logout', { method: 'POST' })
  } catch {
    // no-op
  }
}

export function startGoogleLogin() {
  const base = getApiBase()
  if (!base) throw new Error('API base URL is not configured')
  window.location.href = `${base}/auth/google`
}

export function startDiscordLogin() {
  const base = getApiBase()
  if (!base) throw new Error('API base URL is not configured')
  window.location.href = `${base}/auth/discord`
}

export async function getWalletNonce(): Promise<{ message: string }> {
  const data = await apiJson<{ ok: boolean; message: string }>('/auth/wallet/nonce')
  return { message: data.message }
}

export async function verifyWallet(address: string, signature: string): Promise<void> {
  await apiJson<{ ok: boolean }>('/auth/wallet/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ address, signature }),
  })
}

