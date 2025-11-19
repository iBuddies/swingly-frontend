import { Routes, Route, Navigate, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import VideoLibrary from './pages/VideoLibrary'
import Analysis from './pages/Analysis'
import AdminDashboard from './pages/AdminDashboard'
import NavBar from './components/NavBar'

export default function App() {
  return (
    <div className="min-h-screen bg-background-light text-text-primary">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Home />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/library" element={<VideoLibrary />} />
        <Route path="/analysis/:id" element={<Analysis />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <footer className="mt-20 border-t border-border-light">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center md:flex-row">
          <p className="text-text-secondary text-sm">© 2025 AI Pickleball Coach. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-text-secondary">
            <Link className="hover:text-text-primary" to="#">Contact</Link>
            <Link className="hover:text-text-primary" to="#">Terms</Link>
            <Link className="hover:text-text-primary" to="#">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

