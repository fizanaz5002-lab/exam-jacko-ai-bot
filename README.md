# Exam Jacko AI Bot

A comprehensive AI-powered exam preparation chatbot designed for Indian competitive exams including BPSC, UPSC, SSC, Railway, and Bihar exams. Features a mobile-friendly interface with bilingual support (Hindi & English), intelligent MCQ generation, current affairs updates, and exam-wise question answering.

## Features

✨ **Core Features:**
- 🤖 **AI Chat Interface** - Intelligent exam-focused conversation with bilingual support (Hindi/English)
- 📱 **Mobile-First Design** - Fully responsive UI optimized for smartphones and tablets
- 🎯 **Exam Categories** - Dedicated support for BPSC, UPSC, SSC, Railway, and Bihar exams
- ❓ **MCQ Generator** - Auto-generate practice multiple-choice questions with explanations
- 📰 **Current Affairs** - Latest updates relevant to exam syllabi
- 🔍 **Exam-Wise Q&A** - Curated questions specific to each exam type
- 🌍 **Bilingual Support** - Seamless Hindi and English interface
- 🔐 **Secure Authentication** - Environment-based API key management
- 📊 **User Progress Tracking** - Track quiz attempts and scores (future)

## Tech Stack

### Frontend
- **React/React Native** - UI framework
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **Redux** - State management
- **i18n** - Internationalization (Hindi/English)

### Backend
- **Node.js/Express** - REST API server
- **MongoDB** - Database
- **JWT** - Authentication
- **Gemini AI API** - LLM integration for chat
- **Dotenv** - Environment variable management

## Project Structure

```
exam-jacko-ai-bot/
├── frontend/                 # React web application
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   ├── hooks/           # Custom React hooks
│   │   ├── context/         # Context API setup
│   │   ├── i18n/            # Translations (Hindi/English)
│   │   ├── styles/          # CSS modules
│   │   ├── utils/           # Utility functions
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── .env.example
│   └── package.json
│
├── backend/                  # Express API server
│   ├── routes/              # API route definitions
│   ├── controllers/         # Route handlers
│   ├── models/              # Database schemas
│   ├── middleware/          # Auth, validation, etc.
│   ├── services/            # Business logic
│   ├── config/              # Configuration files
│   ├── utils/               # Helper functions
│   ├── .env.example
│   └── server.js
│
├── .gitignore
├── .env.example
├── README.md
└── LICENSE

```

## Installation & Setup

### Prerequisites
- Node.js (v16+)
- npm or yarn
- MongoDB (local or Atlas)
- Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

### Backend Setup

1. **Clone and navigate:**
   ```bash
   git clone https://github.com/fizanaz5002-lab/exam-jacko-ai-bot.git
   cd exam-jacko-ai-bot/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file:**
   ```bash
   cp .env.example .env
   ```
   Fill in your environment variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/exam-jacko
   JWT_SECRET=your-super-secret-jwt-key-change-this
   GEMINI_API_KEY=your-gemini-api-key-here
   NODE_ENV=development
   ```

4. **Start backend:**
   ```bash
   npm start
   # or for development with hot reload
   npm run dev
   ```

### Frontend Setup

1. **Navigate to frontend:**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file:**
   ```bash
   cp .env.example .env
   ```
   Configure variables:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_ENV=development
   ```

4. **Start development server:**
   ```bash
   npm start
   ```
   Opens at `http://localhost:3000`

## API Documentation

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh-token` - Refresh JWT token

### Chat & AI
- `POST /api/chat/message` - Send message to chatbot
- `GET /api/chat/history` - Get chat history
- `DELETE /api/chat/history/:conversationId` - Clear conversation

### MCQ Generation
- `POST /api/mcq/generate` - Generate MCQs for a topic
- `GET /api/mcq/by-exam/:exam` - Get MCQs by exam type
- `POST /api/mcq/submit-answer` - Submit MCQ answer

### Current Affairs
- `GET /api/current-affairs/latest` - Get latest current affairs
- `GET /api/current-affairs/by-category/:category` - Get by category
- `GET /api/current-affairs/related-to-exam/:exam` - Get relevant to exam

### Exam Questions
- `GET /api/questions/by-exam/:exam` - Get questions for exam
- `GET /api/questions/search` - Search questions
- `POST /api/questions/difficulty/:level` - Get by difficulty level

### User Profile
- `GET /api/user/profile` - Get user details
- `PUT /api/user/profile` - Update user profile
- `GET /api/user/progress` - Get learning progress

## Environment Variables

### Backend (.env)
```
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname

# Authentication
JWT_SECRET=your-jwt-secret-key
JWT_EXPIRE=7d

# AI/LLM
GEMINI_API_KEY=your-gemini-api-key

# CORS
CORS_ORIGIN=http://localhost:3000

# Logging
LOG_LEVEL=info
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
REACT_APP_DEFAULT_LANGUAGE=hi
```

⚠️ **IMPORTANT:** Never commit `.env` files to GitHub. Always use `.env.example` as template.

## Security Best Practices

✅ **Implemented:**
- API keys stored only in backend `.env` files
- JWT token-based authentication
- CORS configured
- Input validation & sanitization
- Environment variables for sensitive data

⚠️ **To Implement:**
- Rate limiting on API endpoints
- HTTPS enforcement in production
- Data encryption for sensitive information
- Regular security audits
- MongoDB injection prevention

## Development Roadmap

### Phase 1 (Current)
- [x] Project structure setup
- [ ] Authentication system
- [ ] Chat interface (basic)
- [ ] MCQ generator (basic)

### Phase 2
- [ ] Advanced chat with exam context
- [ ] Current affairs integration
- [ ] User progress dashboard
- [ ] Mobile app (React Native)

### Phase 3
- [ ] ML-based question difficulty
- [ ] Analytics & insights
- [ ] Premium features
- [ ] Admin panel

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support & Contact

- 📧 Email: support@examjacko.com (future)
- 🐛 Issues: [GitHub Issues](https://github.com/fizanaz5002-lab/exam-jacko-ai-bot/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/fizanaz5002-lab/exam-jacko-ai-bot/discussions)

## Disclaimer

This project is designed to supplement exam preparation and is not an official exam preparation service. Always refer to official exam guidelines and syllabi.

---

**Built with ❤️ for Indian exam aspirants**
