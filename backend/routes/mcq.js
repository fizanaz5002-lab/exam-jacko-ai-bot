const express = require('express');
const router = express.Router();

// Mock MCQ database
const mockMCQs = {
  upsc: [
    {
      id: 1,
      question: 'Which of the following is not a fundamental right under the Indian Constitution?',
      questionHi: 'भारतीय संविधान के तहत निम्नलिखित में से कौन सा मौलिक अधिकार नहीं है?',
      options: [
        'Right to Equality',
        'Right to Property',
        'Right to Freedom',
        'Right to Constitutional Remedies'
      ],
      optionsHi: [
        'समानता का अधिकार',
        'संपत्ति का अधिकार',
        'स्वतंत्रता का अधिकार',
        'संवैधानिक उपचार का अधिकार'
      ],
      correctAnswer: 1,
      explanation: 'Right to Property was removed from Fundamental Rights in the 44th Amendment Act, 1978.',
      explanationHi: 'संपत्ति का अधिकार 44वें संवैधानिक संशोधन अधिनियम, 1978 में मौलिक अधिकारों से हटा दिया गया था।',
      difficulty: 'easy',
      topic: 'Constitution'
    }
  ],
  bpsc: [
    {
      id: 2,
      question: 'What is the capital of Bihar?',
      questionHi: 'बिहार की राजधानी क्या है?',
      options: ['Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur'],
      optionsHi: ['पटना', 'गया', 'मुजफ्फरपुर', 'भागलपुर'],
      correctAnswer: 0,
      explanation: 'Patna is the capital and largest city of Bihar.',
      explanationHi: 'पटना बिहार की राजधानी और सबसे बड़ा शहर है।',
      difficulty: 'easy',
      topic: 'Geography'
    }
  ]
};

// Generate MCQs
router.post('/generate', (req, res) => {
  const { exam, topic, count = 5, language = 'en' } = req.body;

  if (!exam || !topic) {
    return res.status(400).json({ error: 'exam and topic are required' });
  }

  // Mock MCQ generation
  const generatedMCQs = [];
  for (let i = 0; i < count; i++) {
    generatedMCQs.push({
      id: Date.now() + i,
      question: `Sample ${topic} question ${i + 1} for ${exam.toUpperCase()}`,
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `This is an explanation for question ${i + 1}`,
      difficulty: ['easy', 'medium', 'hard'][Math.floor(Math.random() * 3)],
      topic
    });
  }

  res.status(200).json({
    exam,
    topic,
    count: generatedMCQs.length,
    mcqs: generatedMCQs,
    language
  });
});

// Get MCQs by exam
router.get('/by-exam/:exam', (req, res) => {
  const { exam } = req.params;
  const { language = 'en' } = req.query;

  const mcqs = mockMCQs[exam.toLowerCase()] || [];

  if (mcqs.length === 0) {
    return res.status(404).json({
      message: `No MCQs found for exam: ${exam}`,
      supportedExams: Object.keys(mockMCQs)
    });
  }

  res.status(200).json({
    exam,
    language,
    totalMCQs: mcqs.length,
    mcqs
  });
});

// Submit answer
router.post('/submit-answer', (req, res) => {
  const { mcqId, selectedAnswer, userId } = req.body;

  if (mcqId === undefined || selectedAnswer === undefined || !userId) {
    return res.status(400).json({ error: 'mcqId, selectedAnswer, and userId are required' });
  }

  // Mock evaluation
  const isCorrect = selectedAnswer === Math.floor(Math.random() * 4);

  res.status(200).json({
    mcqId,
    userId,
    selectedAnswer,
    isCorrect,
    feedback: isCorrect ? 'Correct answer!' : 'Incorrect answer. Try again!'
  });
});

module.exports = router;
