import React from 'react'
import { useTranslation } from 'react-i18next'
import ExamCard from '../components/ExamCard'
import '../styles/exam-selection.css'

function ExamSelection() {
  const { t } = useTranslation()

  const exams = [
    { id: 'upsc', name: 'UPSC', description: t('exam_categories.upsc') },
    { id: 'bpsc', name: 'BPSC', description: t('exam_categories.bpsc') },
    { id: 'ssc', name: 'SSC', description: t('exam_categories.ssc') },
    { id: 'railway', name: 'Railway', description: t('exam_categories.railway') },
    { id: 'bihar', name: 'Bihar', description: t('exam_categories.bihar') },
  ]

  return (
    <main className="page">
      <div className="container">
        <h1>{t('select_exam')}</h1>
        <div className="grid grid-2">
          {exams.map(exam => (
            <ExamCard
              key={exam.id}
              exam={exam.name}
              description={exam.description}
              onClick={() => console.log('Selected:', exam.id)}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default ExamSelection
