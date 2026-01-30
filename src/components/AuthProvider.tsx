import { useCallback, useEffect, useMemo, useState } from 'react'
import { getMe, logout as apiLogout } from '../lib/sessionAuth'
import { AuthContext, type AuthState } from './authContext'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<AuthState['user']>(null)

  const refresh = useCallback(async () => {
    setLoading(true)
    const me = await getMe()
    setUser(me)
    setLoading(false)
  }, [])

  const logout = useCallback(async () => {
    await apiLogout()
    await refresh()
  }, [refresh])

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const me = await getMe()
      if (cancelled) return
      setUser(me)
      setLoading(false)
    })()
    return () => {
      cancelled = true
    }
  }, [])

  const value = useMemo<AuthState>(() => ({ loading, user, refresh, logout }), [
    loading,
    user,
    refresh,
    logout,
  ])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

