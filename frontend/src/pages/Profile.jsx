import React from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/profile.css'

function Profile({ user }) {
  const { t } = useTranslation()
  return (
    <main className="page">
      <div className="container">
        <div className="profile-card card">
          <div className="profile-header">
            <div className="profile-avatar">👤</div>
            <div className="profile-info">
              <h1>{user?.name || 'User'}</h1>
              <p>{user?.email || 'No email'}</p>
            </div>
          </div>
          <div className="profile-stats grid grid-3">
            <div className="stat-item"><h3>0</h3><p>{t('total_questions')}</p></div>
            <div className="stat-item"><h3>0</h3><p>{t('correct_answers')}</p></div>
            <div className="stat-item"><h3>0%</h3><p>{t('accuracy')}</p></div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Profile
