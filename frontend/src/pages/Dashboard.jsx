import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import '../styles/dashboard.css'

function Dashboard({ user }) {
  const { t } = useTranslation()

  const quickLinks = [
    { icon: '🤖', label: t('chat'), path: '/chat' },
    { icon: '❓', label: t('mcq'), path: '/mcq' },
    { icon: '📰', label: t('current_affairs'), path: '/current-affairs' },
    { icon: '❔', label: t('questions'), path: '/questions' },
  ]

  return (
    <main className="page">
      <div className="container">
        <div className="dashboard-header">
          <h1>{t('welcome_back')}, {user?.name}!</h1>
          <p>{t('your_progress')}</p>
        </div>

        <div className="dashboard-grid grid grid-2">
          <div className="dashboard-card card">
            <h3>{t('total_questions')}</h3>
            <p className="stat-value">0</p>
          </div>
          <div className="dashboard-card card">
            <h3>{t('accuracy')}</h3>
            <p className="stat-value">0%</p>
          </div>
        </div>

        <h2 style={{ marginTop: '2rem' }}>{t('start_learning')}</h2>
        <div className="quick-links grid grid-2">
          {quickLinks.map((link, idx) => (
            <Link key={idx} to={link.path} className="quick-link card">
              <div className="link-icon">{link.icon}</div>
              <div>{link.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Dashboard
