import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { questionsAPI } from '../services/api'
import '../styles/questions.css'

function Questions() {
  const { t, i18n } = useTranslation()
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(false)
  const [exam, setExam] = useState('upsc')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchQuestions()
  }, [exam, i18n.language])

  const fetchQuestions = async () => {
    setLoading(true)
    try {
      const response = await questionsAPI.getByExam(exam, i18n.language)
      setQuestions(response.data.questions)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async () => {
    if (!searchTerm) return
    setLoading(true)
    try {
      const response = await questionsAPI.search(searchTerm, i18n.language)
      setQuestions(response.data.results)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="page">
      <div className="container">
        <h1>{t('questions')}</h1>

        <div className="questions-controls card">
          <div className="search-bar">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t('search')}
            />
            <button className="btn btn-primary btn-small" onClick={handleSearch}>
              {t('search')}
            </button>
          </div>

          <select value={exam} onChange={(e) => setExam(e.target.value)}>
            <option value="upsc">UPSC</option>
            <option value="bpsc">BPSC</option>
            <option value="ssc">SSC</option>
            <option value="railway">Railway</option>
            <option value="bihar">Bihar</option>
          </select>
        </div>

        <div className="questions-list">
          {loading ? (
            <p>{t('loading')}</p>
          ) : questions.length > 0 ? (
            questions.map((q, idx) => (
              <div key={idx} className="question-item card">
                <h4>{q.question}</h4>
                <p className="text-muted">{q.topic}</p>
                <p>{q.answer}</p>
              </div>
            ))
          ) : (
            <p>{t('no_results')}</p>
          )}
        </div>
      </div>
    </main>
  )
}

export default Questions
