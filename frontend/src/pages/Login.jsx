import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { authAPI } from '../services/api'
import '../styles/auth.css'

function Login({ onLogin }) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await authAPI.login(email, password)
      const { token, user } = response.data
      onLogin(token, user)
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.error || t('api_error'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card card">
        <h2>{t('login')}</h2>
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>{t('email')}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>{t('password')}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? t('loading') : t('sign_in')}
          </button>
        </form>

        <p className="auth-link">
          {t('dont_have_account')} <a href="/register">{t('sign_up')}</a>
        </p>
      </div>
    </div>
  )
}

export default Login
