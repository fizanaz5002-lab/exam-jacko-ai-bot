import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/navbar.css'

function Navbar({ isAuthenticated, user, onLogout }) {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en'
    i18n.changeLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  const handleLogout = () => {
    onLogout()
    navigate('/')
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          📚 Exam Jacko
        </Link>

        <div className="navbar-menu">
          {isAuthenticated && (
            <>
              <Link to="/chat" className="nav-link">{t('chat')}</Link>
              <Link to="/mcq" className="nav-link">{t('mcq')}</Link>
              <Link to="/current-affairs" className="nav-link">{t('current_affairs')}</Link>
              <Link to="/questions" className="nav-link">{t('questions')}</Link>
              <Link to="/dashboard" className="nav-link">{t('dashboard')}</Link>
            </>
          )}
        </div>

        <div className="navbar-actions">
          <button className="lang-toggle" onClick={toggleLanguage}>
            {i18n.language === 'en' ? '🇮🇳 हिंदी' : '🇺🇸 English'}
          </button>

          {isAuthenticated ? (
            <>
              <Link to="/profile" className="nav-link">{t('profile')}</Link>
              <button className="btn btn-secondary btn-small" onClick={handleLogout}>
                {t('logout')}
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary btn-small">{t('login')}</Link>
              <Link to="/register" className="btn btn-outline btn-small">{t('register')}</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
