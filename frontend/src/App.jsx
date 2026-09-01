import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ExamSelection from './pages/ExamSelection'
import Chat from './pages/Chat'
import MCQPractice from './pages/MCQPractice'
import CurrentAffairs from './pages/CurrentAffairs'
import Questions from './pages/Questions'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import './styles/app.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const { i18n } = useTranslation()

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('authToken')
    const userData = localStorage.getItem('user')
    if (token && userData) {
      setIsAuthenticated(true)
      setUser(JSON.parse(userData))
    }

    // Set language
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage)
    }
  }, [])

  const handleLogin = (token, userData) => {
    localStorage.setItem('authToken', token)
    localStorage.setItem('user', JSON.stringify(userData))
    setIsAuthenticated(true)
    setUser(userData)
  }

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('user')
    setIsAuthenticated(false)
    setUser(null)
  }

  return (
    <Router>
      <Navbar
        isAuthenticated={isAuthenticated}
        user={user}
        onLogout={handleLogout}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/exam-selection"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ExamSelection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Chat user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mcq"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MCQPractice user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/current-affairs"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <CurrentAffairs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/questions"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Questions />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
