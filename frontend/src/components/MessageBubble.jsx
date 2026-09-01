import React from 'react'
import '../styles/message-bubble.css'

function MessageBubble({ message, isUser = false }) {
  return (
    <div className={`message-bubble ${isUser ? 'user' : 'ai'}`}>
      {message}
    </div>
  )
}

export default MessageBubble
