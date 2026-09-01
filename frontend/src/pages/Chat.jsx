import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { chatAPI } from '../services/api'
import MessageBubble from '../components/MessageBubble'
import '../styles/chat.css'

function Chat({ user }) {
  const { t, i18n } = useTranslation()
  const [messages, setMessages] = useState([{ id: 1, text: t('welcome'), isUser: false }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!input.trim()) return
    const userMessage = input
    setInput('')
    setMessages(prev => [...prev, { id: Date.now(), text: userMessage, isUser: true }])
    setLoading(true)
    try {
      const response = await chatAPI.sendMessage(userMessage, user?.email || 'guest', i18n.language)
      setMessages(prev => [...prev, { id: Date.now() + 1, text: response.data.aiResponse, isUser: false }])
    } catch (err) {
      setMessages(prev => [...prev, { id: Date.now() + 1, text: t('api_error'), isUser: false }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="page chat-page">
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map(msg => (<MessageBubble key={msg.id} message={msg.text} isUser={msg.isUser} />))}
          {loading && <MessageBubble message={t('loading')} isUser={false} />}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSendMessage} className="chat-input-form">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder={t('message')} disabled={loading} />
          <button type="submit" className="btn btn-primary btn-small" disabled={loading}>{t('send')}</button>
        </form>
      </div>
    </main>
  )
}

export default Chat
