import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { mcqAPI } from '../services/api'
import MCQCard from '../components/MCQCard'
import '../styles/mcq.css'

function MCQPractice({ user }) {
  const { t, i18n } = useTranslation()
  const [exam, setExam] = useState('')
  const [topic, setTopic] = useState('')
  const [mcqs, setMcqs] = useState([])
  const [loading, setLoading] = useState(false)
  const exams = ['upsc', 'bpsc', 'ssc', 'railway', 'bihar']
  const topics = ['Constitution', 'History', 'Geography', 'Economy', 'Politics']

  const handleGenerateMCQ = async () => {
    if (!exam || !topic) return
    setLoading(true)
    try {
      const response = await mcqAPI.generate(exam, topic, 5, i18n.language)
      setMcqs(response.data.mcqs)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="page">
      <div className="container">
        <h1>{t('mcq')}</h1>
        <div className="mcq-controls card">
          <div className="grid grid-3">
            <select value={exam} onChange={(e) => setExam(e.target.value)}>
              <option value="">{t('select_exam')}</option>
              {exams.map(e => <option key={e} value={e}>{e.toUpperCase()}</option>)}
            </select>
            <select value={topic} onChange={(e) => setTopic(e.target.value)}>
              <option value="">{t('topics')}</option>
              {topics.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <button className="btn btn-primary" onClick={handleGenerateMCQ} disabled={!exam || !topic || loading}>
              {loading ? t('loading') : t('generate_mcq')}
            </button>
          </div>
        </div>
        <div className="mcq-list">
          {mcqs.map((mcq, index) => (
            <MCQCard key={mcq.id} question={mcq.question} options={mcq.options} onAnswer={(answer) => console.log(index, answer)} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default MCQPractice
