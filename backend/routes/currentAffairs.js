const express = require('express');
const router = express.Router();

// Mock current affairs database
const mockCurrentAffairs = [
  {
    id: 1,
    title: 'India Hosts G20 Summit',
    titleHi: 'भारत ने G20 शिखर सम्मेलन की मेजबानी की',
    description: 'India successfully hosted the G20 summit with focus on sustainable development.',
    descriptionHi: 'भारत ने टिकाऊ विकास पर ध्यान केंद्रित करके G20 शिखर सम्मेलन की सफलतापूर्वक मेजबानी की।',
    category: 'Politics',
    categoryHi: 'राजनीति',
    date: '2024-09-01',
    relevantExams: ['UPSC', 'BPSC'],
    importance: 'high'
  },
  {
    id: 2,
    title: 'RBI Announces New Digital Payment Rules',
    titleHi: 'RBI ने डिजिटल भुगतान के नए नियम घोषित किए',
    description: 'Reserve Bank of India issued new guidelines for digital payment systems.',
    descriptionHi: 'भारतीय रिजर्व बैंक ने डिजिटल भुगतान प्रणालियों के लिए नई दिशानिर्देश जारी किए।',
    category: 'Economy',
    categoryHi: 'अर्थव्यवस्था',
    date: '2024-08-31',
    relevantExams: ['UPSC', 'SSC', 'BPSC'],
    importance: 'medium'
  }
];

// Get latest current affairs
router.get('/latest', (req, res) => {
  const { language = 'en', limit = 10 } = req.query;

  const items = mockCurrentAffairs.slice(0, parseInt(limit));

  res.status(200).json({
    language,
    count: items.length,
    currentAffairs: items
  });
});

// Get by category
router.get('/by-category/:category', (req, res) => {
  const { category } = req.params;
  const { language = 'en' } = req.query;

  const filtered = mockCurrentAffairs.filter(
    item => item.category.toLowerCase() === category.toLowerCase()
  );

  if (filtered.length === 0) {
    return res.status(404).json({
      message: `No current affairs found for category: ${category}`,
      availableCategories: [...new Set(mockCurrentAffairs.map(item => item.category))]
    });
  }

  res.status(200).json({
    category,
    language,
    count: filtered.length,
    currentAffairs: filtered
  });
});

// Get related to exam
router.get('/related-to-exam/:exam', (req, res) => {
  const { exam } = req.params;
  const { language = 'en' } = req.query;

  const filtered = mockCurrentAffairs.filter(
    item => item.relevantExams.map(e => e.toUpperCase()).includes(exam.toUpperCase())
  );

  if (filtered.length === 0) {
    return res.status(404).json({
      message: `No current affairs found for exam: ${exam}`,
      supportedExams: [...new Set(mockCurrentAffairs.flatMap(item => item.relevantExams))]
    });
  }

  res.status(200).json({
    exam,
    language,
    count: filtered.length,
    currentAffairs: filtered
  });
});

module.exports = router;
