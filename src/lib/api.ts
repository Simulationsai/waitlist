export function getApiBase(): string | null {
  const apiBase = (import.meta as { env?: Record<string, string> }).env?.VITE_API_BASE_URL
  if (!apiBase) return null
  return apiBase.replace(/\/$/, '')
}

export async function apiJson<T>(
  path: string,
  init?: Omit<RequestInit, 'credentials'>,
): Promise<T> {
  const base = getApiBase()
  if (!base) throw new Error('API base URL is not configured')
  const res = await fetch(`${base}${path}`, { ...init, credentials: 'include' })
  const data = (await res.json().catch(() => null)) as T | null
  if (!res.ok) {
    const err = (data as { error?: string } | null)?.error
    throw new Error(err || `Request failed (${res.status})`)
  }
  if (!data) throw new Error('Invalid server response')
  return data
}

