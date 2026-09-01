const express = require('express');
const router = express.Router();

// Mock questions database
const mockQuestions = {
  bpsc: [
    {
      id: 1,
      question: 'Which dynasty ruled Bihar during the 3rd century BC?',
      questionHi: '3वीं शताब्दी ईसा पूर्व में बिहार पर किस राजवंश का शासन था?',
      answer: 'Maurya Dynasty',
      answerHi: 'मौर्य राजवंश',
      difficulty: 'medium',
      topic: 'History'
    }
  ],
  upsc: [
    {
      id: 2,
      question: 'What is the minimum age for a candidate to contest for the office of President of India?',
      questionHi: 'भारत के राष्ट्रपति के पद के लिए चुनाव लड़ने के लिए किसी उम्मीदवार की न्यूनतम आयु कितनी है?',
      answer: '35 years',
      answerHi: '35 वर्ष',
      difficulty: 'easy',
      topic: 'Constitution'
    }
  ],
  ssc: [
    {
      id: 3,
      question: 'Which is the longest river in India?',
      questionHi: 'भारत की सबसे लंबी नदी कौन सी है?',
      answer: 'Ganges River',
      answerHi: 'गंगा नदी',
      difficulty: 'easy',
      topic: 'Geography'
    }
  ],
  railway: [
    {
      id: 4,
      question: 'In which year was the first railway line in India inaugurated?',
      questionHi: 'भारत में पहली रेलवे लाइन किस वर्ष का उद्घाटन किया गया?',
      answer: '1853',
      answerHi: '1853',
      difficulty: 'medium',
      topic: 'History'
    }
  ],
  bihar: [
    {
      id: 5,
      question: 'How many districts are there in Bihar?',
      questionHi: 'बिहार में कितने जिले हैं?',
      answer: '38',
      answerHi: '38',
      difficulty: 'easy',
      topic: 'Geography'
    }
  ]
};

// Get questions by exam
router.get('/by-exam/:exam', (req, res) => {
  const { exam } = req.params;
  const { language = 'en' } = req.query;

  const questions = mockQuestions[exam.toLowerCase()] || [];

  if (questions.length === 0) {
    return res.status(404).json({
      message: `No questions found for exam: ${exam}`,
      supportedExams: Object.keys(mockQuestions)
    });
  }

  res.status(200).json({
    exam,
    language,
    count: questions.length,
    questions
  });
});

// Search questions
router.get('/search', (req, res) => {
  const { keyword, language = 'en' } = req.query;

  if (!keyword) {
    return res.status(400).json({ error: 'keyword query parameter is required' });
  }

  const results = [];
  const searchTerm = keyword.toLowerCase();

  for (const exam in mockQuestions) {
    mockQuestions[exam].forEach(question => {
      if (
        question.question.toLowerCase().includes(searchTerm) ||
        question.topic.toLowerCase().includes(searchTerm)
      ) {
        results.push({ ...question, exam });
      }
    });
  }

  res.status(200).json({
    keyword,
    language,
    count: results.length,
    results
  });
});

// Get by difficulty level
router.get('/difficulty/:level', (req, res) => {
  const { level } = req.params;
  const { language = 'en' } = req.query;

  if (!['easy', 'medium', 'hard'].includes(level.toLowerCase())) {
    return res.status(400).json({
      error: 'level must be easy, medium, or hard'
    });
  }

  const results = [];
  const difficultyLevel = level.toLowerCase();

  for (const exam in mockQuestions) {
    mockQuestions[exam].forEach(question => {
      if (question.difficulty === difficultyLevel) {
        results.push({ ...question, exam });
      }
    });
  }

  res.status(200).json({
    difficulty: difficultyLevel,
    language,
    count: results.length,
    questions: results
  });
});

module.exports = router;
