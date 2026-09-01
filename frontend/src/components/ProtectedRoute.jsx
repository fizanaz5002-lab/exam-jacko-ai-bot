import React from 'react'
import { useTranslation } from 'react-i18next'

function ProtectedRoute({ isAuthenticated, children }) {
  const { t } = useTranslation()

  if (!isAuthenticated) {
    return (
      <div className="flex-center" style={{ height: '60vh' }}>
        <div className="card text-center">
          <h2>{t('unauthorized')}</h2>
          <p className="text-muted mt">
            <a href="/login">{t('login')}</a>
          </p>
        </div>
      </div>
    )
  }

  return children
}

export default ProtectedRoute
