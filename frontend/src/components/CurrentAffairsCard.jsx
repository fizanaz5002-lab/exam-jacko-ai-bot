import React from 'react'
import '../styles/current-affairs-card.css'

function CurrentAffairsCard({ title, description, category, date, importance }) {
  return (
    <div className="ca-card card">
      <div className="ca-header">
        <h4>{title}</h4>
        <span className={`importance ${importance}`}>{importance}</span>
      </div>
      <p className="ca-category">{category}</p>
      <p>{description}</p>
      <p className="ca-date">📅 {new Date(date).toLocaleDateString()}</p>
    </div>
  )
}

export default CurrentAffairsCard
