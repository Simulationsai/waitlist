import { createContext, useContext } from 'react'
import type { SessionUser } from '../lib/sessionAuth'

export type AuthState = {
  loading: boolean
  user: SessionUser | null
  refresh: () => Promise<void>
  logout: () => Promise<void>
}

export const AuthContext = createContext<AuthState | null>(null)

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

