const AUTH_KEY = 'simulationsai_auth_v1'
const USER_KEY = 'simulationsai_user_v1'

export type SimulationsAIUser = {
  displayName: string
  email?: string
}

export function isAuthenticated(): boolean {
  try {
    return window.localStorage.getItem(AUTH_KEY) === 'true'
  } catch {
    return false
  }
}

export function setAuthenticated(value: boolean) {
  try {
    window.localStorage.setItem(AUTH_KEY, value ? 'true' : 'false')
  } catch {
    // no-op
  }
}

export function setUser(user: SimulationsAIUser | null) {
  try {
    if (!user) {
      window.localStorage.removeItem(USER_KEY)
      return
    }
    window.localStorage.setItem(USER_KEY, JSON.stringify(user))
  } catch {
    // no-op
  }
}

export function getUser(): SimulationsAIUser | null {
  try {
    const raw = window.localStorage.getItem(USER_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Partial<SimulationsAIUser>
    if (!parsed.displayName) return null
    return { displayName: parsed.displayName, email: parsed.email }
  } catch {
    return null
  }
}

export function logout() {
  setAuthenticated(false)
  setUser(null)
}

