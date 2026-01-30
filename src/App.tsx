import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './components/AuthProvider'
import { Layout } from './components/Layout'
import { RequireAuth } from './components/RequireAuth'
import { Airdrop } from './pages/Airdrop'
import { AppHome } from './pages/AppHome'
import { Dashboard } from './pages/Dashboard'
import { HowItWorks } from './pages/HowItWorks'
import { Landing } from './pages/Landing'
import { Leaderboard } from './pages/Leaderboard'
import { Litepaper } from './pages/Litepaper'
import { Login } from './pages/Login'
import { Nodes } from './pages/Nodes'
import { NFT } from './pages/NFT'
import { NotFound } from './pages/NotFound'
import { Referrals } from './pages/Referrals'
import { Roadmap } from './pages/Roadmap'
import { Settings } from './pages/Settings'
import { Tasks } from './pages/Tasks'
import { Vision } from './pages/Vision'
import { Waitlist } from './pages/Waitlist'
import { XPOverview } from './pages/XPOverview'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/litepaper" element={<Litepaper />} />
            <Route path="/airdrop" element={<Airdrop />} />
            <Route path="/waitlist" element={<Waitlist />} />
            <Route path="/login" element={<Login />} />

            <Route element={<RequireAuth />}>
              <Route path="/app" element={<AppHome />} />
              <Route path="/app/dashboard" element={<Dashboard />} />
              <Route path="/app/xp" element={<XPOverview />} />
              <Route path="/app/tasks" element={<Tasks />} />
              <Route path="/app/nodes" element={<Nodes />} />
              <Route path="/app/nft" element={<NFT />} />
              <Route path="/app/referrals" element={<Referrals />} />
              <Route path="/app/leaderboard" element={<Leaderboard />} />
              <Route path="/app/settings" element={<Settings />} />
            </Route>

            <Route path="/about" element={<Navigate to="/vision" replace />} />
            <Route path="/nodes-overview" element={<Navigate to="/how-it-works#nodes" replace />} />
            <Route path="/dashboard" element={<Navigate to="/app/dashboard" replace />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
