import React from 'react'

function Loading() {
  return (
    <div className="flex-center" style={{ height: '60vh' }}>
      <div style={{ textAlign: 'center' }}>
        <div className="spinner"></div>
        <p style={{ marginTop: '1rem' }}>Loading...</p>
      </div>
    </div>
  )
}

export default Loading
