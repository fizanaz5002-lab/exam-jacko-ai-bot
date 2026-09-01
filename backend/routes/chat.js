const express = require('express');
const router = express.Router();

// Mock chat history
const chatHistories = new Map();

// Mock AI response generator
const generateAIResponse = (message, language = 'en') => {
  const responses = {
    en: {
      'exam': 'Which exam would you like to prepare for? We support BPSC, UPSC, SSC, Railway, and Bihar exams.',
      'mcq': 'I can generate practice MCQs for you. Which exam and topic interest you?',
      'current affairs': 'Let me fetch the latest current affairs updates relevant to your exam.',
      'default': 'I\'m here to help with your exam preparation. Ask me about exams, MCQs, or current affairs!'
    },
    hi: {
      'exam': 'आप किस परीक्षा की तैयारी करना चाहते हैं? हम BPSC, UPSC, SSC, Railway और Bihar परीक्षाओं का समर्थन करते हैं।',
      'mcq': 'मैं आपके लिए अभ्यास MCQ जनरेट कर सकता हूँ। आपको कौन सी परीक्षा और विषय में रुची है?',
      'current affairs': 'आपकी परीक्षा के लिए प्रासंगिक नवीनतम समसामयिक जानकारी लाता हूँ।',
      'default': 'मैं आपकी परीक्षा की तैयारी में मदद के लिए यहाँ हूँ। मुझसे परीक्षाओं, MCQs, या करंट अफेयर्स के बारे में पूछें!'
    }
  };

  const lowerMessage = message.toLowerCase();
  for (const key of Object.keys(responses[language])) {
    if (lowerMessage.includes(key)) {
      return responses[language][key];
    }
  }
  return responses[language]['default'];
};

// Send message
router.post('/message', (req, res) => {
  const { message, userId, language = 'en' } = req.body;

  if (!message || !userId) {
    return res.status(400).json({ error: 'message and userId are required' });
  }

  if (!['en', 'hi'].includes(language)) {
    return res.status(400).json({ error: 'language must be en or hi' });
  }

  // Initialize chat history for user
  if (!chatHistories.has(userId)) {
    chatHistories.set(userId, []);
  }

  const aiResponse = generateAIResponse(message, language);
  const timestamp = new Date().toISOString();

  const chatEntry = {
    userMessage: message,
    aiResponse,
    language,
    timestamp
  };

  chatHistories.get(userId).push(chatEntry);

  res.status(200).json({
    userMessage: message,
    aiResponse,
    timestamp,
    conversationId: userId
  });
});

// Get chat history
router.get('/history', (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ error: 'userId query parameter is required' });
  }

  const history = chatHistories.get(userId) || [];

  res.status(200).json({
    userId,
    messageCount: history.length,
    messages: history
  });
});

// Clear chat history
router.delete('/history/:userId', (req, res) => {
  const { userId } = req.params;

  if (chatHistories.has(userId)) {
    chatHistories.delete(userId);
  }

  res.status(200).json({
    message: 'Chat history cleared',
    userId
  });
});

module.exports = router;
