import React from 'react'
import '../styles/mcq-card.css'

function MCQCard({ question, options, onAnswer }) {
  const [selected, setSelected] = React.useState(null)

  return (
    <div className="mcq-card card">
      <h4>{question}</h4>
      <div className="options">
        {options.map((option, index) => (
          <label key={index} className="option">
            <input
              type="radio"
              name="answer"
              value={index}
              checked={selected === index}
              onChange={() => setSelected(index)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      <button
        className="btn btn-primary btn-small"
        onClick={() => onAnswer(selected)}
        disabled={selected === null}
      >
        Submit
      </button>
    </div>
  )
}

export default MCQCard
