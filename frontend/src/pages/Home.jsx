import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import '../styles/pages.css'

function Home() {
  const { t } = useTranslation()

  return (
    <main className="page">
      <div className="container">
        <section className="hero">
          <h1>📚 {t('app_name')}</h1>
          <p className="lead">{t('app_description')}</p>
          <div className="hero-buttons">
            <Link to="/login" className="btn btn-primary">{t('login')}</Link>
            <Link to="/register" className="btn btn-outline">{t('register')}</Link>
          </div>
        </section>

        <section className="features">
          <h2>{t('features')}</h2>
          <div className="grid grid-3">
            <div className="card feature-card">
              <h3>🤖 AI Chat</h3>
              <p>Get instant answers to your exam-related questions powered by AI.</p>
            </div>
            <div className="card feature-card">
              <h3>❓ MCQ Practice</h3>
              <p>Practice with thousands of multiple-choice questions from all exams.</p>
            </div>
            <div className="card feature-card">
              <h3>📰 Current Affairs</h3>
              <p>Stay updated with latest current affairs relevant to your exams.</p>
            </div>
            <div className="card feature-card">
              <h3>🎯 Exam-Wise QA</h3>
              <p>Get curated questions specific to BPSC, UPSC, SSC, Railway, Bihar.</p>
            </div>
            <div className="card feature-card">
              <h3>📊 Progress Tracking</h3>
              <p>Track your learning progress and see your improvements over time.</p>
            </div>
            <div className="card feature-card">
              <h3>🌍 Bilingual</h3>
              <p>Learn in Hindi or English, switch anytime as per your preference.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
