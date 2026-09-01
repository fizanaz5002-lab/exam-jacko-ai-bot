import React from 'react'
import '../styles/exam-card.css'

function ExamCard({ exam, description, onClick }) {
  return (
    <div className="exam-card card" onClick={onClick}>
      <h3>{exam}</h3>
      <p className="text-muted">{description}</p>
      <button className="btn btn-primary btn-small">Select</button>
    </div>
  )
}

export default ExamCard
