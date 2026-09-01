# Exam Jacko AI Bot

A comprehensive AI-powered exam preparation chatbot designed for Indian competitive exams including BPSC, UPSC, SSC, Railway, and Bihar exams. Features a mobile-friendly interface with bilingual support (Hindi & English), intelligent MCQ generation, current affairs updates, and exam-wise question answering.

## 🎯 Features

✨ **Core Features:**
- 🤖 **AI Chat Interface** - Intelligent exam-focused conversation with bilingual support (Hindi/English)
- 📱 **Mobile-First Design** - Fully responsive UI optimized for smartphones and tablets
- 🎯 **Exam Categories** - Dedicated support for BPSC, UPSC, SSC, Railway, and Bihar exams
- ❓ **MCQ Practice** - Practice multiple-choice questions with explanations
- 📰 **Current Affairs** - Latest updates relevant to exam syllabi
- 🔍 **Exam-Wise Q&A** - Curated questions specific to each exam type
- 🌍 **Bilingual Support** - Seamless Hindi and English interface toggle
- 🔐 **Secure Authentication** - JWT-based with environment variable management
- 📊 **User Dashboard** - View progress and learning statistics

## 💻 Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Fast build tool and dev server
- **React Router v6** - Client-side routing
- **i18next** - Internationalization (Hindi/English)
- **Axios** - HTTP client with JWT interceptors
- **CSS3** - Clean, responsive styling (mobile-first)

### Backend
- **Node.js/Express** - REST API server
- **Axios** - HTTP client
- **CORS** - Cross-Origin Resource Sharing
- **express-validator** - Input validation
- **morgan** - HTTP request logging
- **dotenv** - Environment variable management

**Future Enhancements:**
- MongoDB for persistent data storage
- JWT authentication with bcrypt password hashing
- Google Gemini AI API for intelligent responses
- Stripe for premium features

## 📁 Project Structure

```
exam-jacko-ai-bot/
├── frontend/                          # React + Vite web application
│   ├── public/
│   ├── src/
│   │   ├── components/                # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── Loading.jsx
│   │   │   ├── MessageBubble.jsx
│   │   │   ├── ExamCard.jsx
│   │   │   ├── MCQCard.jsx
│   │   │   └── CurrentAffairsCard.jsx
│   │   ├── pages/                     # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── ExamSelection.jsx
│   │   │   ├── Chat.jsx
│   │   │   ├── MCQPractice.jsx
│   │   │   ├── CurrentAffairs.jsx
│   │   │   ├── Questions.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── services/
│   │   │   └── api.js                 # Axios API client with interceptors
│   │   ├── i18n/
│   │   │   ├── config.js              # i18next configuration
│   │   │   └── locales/
│   │   │       ├── en.json            # English translations
│   │   │       └── hi.json            # Hindi translations
│   │   ├── styles/
│   │   │   ├── global.css
│   │   │   ├── app.css
│   │   │   ├── navbar.css
│   │   │   ├── auth.css
│   │   │   ├── pages.css
│   │   │   ├── chat.css
│   │   │   ├── mcq.css
│   │   │   ├── current-affairs.css
│   │   │   ├── questions.css
│   │   │   ├── profile.css
│   │   │   ├── dashboard.css
│   │   │   ├── message-bubble.css
│   │   │   ├── exam-card.css
│   │   │   ├── mcq-card.css
│   │   │   └── current-affairs-card.css
│   │   ├── App.jsx                    # Main app component
│   │   └── index.jsx                  # React entry point
│   ├── index.html                     # HTML template
│   ├── vite.config.js                 # Vite configuration
│   ├── package.json
│   ├── .env.example
│   └── .env (git-ignored)
│
├── backend/                           # Express.js API server
│   ├── routes/
│   │   ├── auth.js                    # Authentication endpoints
│   │   ├── chat.js                    # AI chat endpoints
│   │   ├── mcq.js                     # MCQ generation endpoints
│   │   ├── currentAffairs.js          # Current affairs endpoints
│   │   └── questions.js               # Exam questions endpoints
│   ├── server.js                      # Express app entry point
│   ├── package.json
│   ├── .env.example
│   └── .env (git-ignored)
│
├── .gitignore
├── README.md
└── PROJECT_SUMMARY.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js v16 or higher
- npm or yarn
- Git

### Backend Setup

1. **Clone repository:**
   ```bash
   git clone https://github.com/fizanaz5002-lab/exam-jacko-ai-bot.git
   cd exam-jacko-ai-bot/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup environment:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and configure:
   ```
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/exam-jacko
   JWT_SECRET=your-super-secret-jwt-key-here
   GEMINI_API_KEY=your-gemini-api-key-here
   CORS_ORIGIN=http://localhost:3000
   LOG_LEVEL=info
   ```

4. **Start backend:**
   ```bash
   npm run dev    # Development with hot reload
   npm start      # Production mode
   ```
   Backend runs at: `http://localhost:5000`
   Health check: `http://localhost:5000/api/health`

### Frontend Setup

1. **Navigate to frontend:**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup environment:**
   ```bash
   cp .env.example .env
   ```
   Configure variables:
   ```
   VITE_API_BASE_URL=http://localhost:5000/api
   VITE_ENV=development
   VITE_DEFAULT_LANGUAGE=en
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```
   Frontend runs at: `http://localhost:3000` (auto-opens)

5. **Build for production:**
   ```bash
   npm run build
   ```
   Output in: `dist/` folder

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | User login |
| POST | `/api/auth/logout` | User logout |

### Chat & AI
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/chat/message` | Send message to chatbot |
| GET | `/api/chat/history?userId=...` | Get chat history |
| DELETE | `/api/chat/history/:userId` | Clear chat history |

### MCQ Practice
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/mcq/generate` | Generate MCQs |
| GET | `/api/mcq/by-exam/:exam` | Get MCQs by exam |
| POST | `/api/mcq/submit-answer` | Submit MCQ answer |

### Current Affairs
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/current-affairs/latest` | Get latest updates |
| GET | `/api/current-affairs/by-category/:category` | Filter by category |
| GET | `/api/current-affairs/related-to-exam/:exam` | Get exam-relevant news |

### Exam Questions
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/questions/by-exam/:exam` | Get questions for exam |
| GET | `/api/questions/search?keyword=...` | Search questions |
| GET | `/api/questions/difficulty/:level` | Get by difficulty |

## ⚙️ Environment Variables

### Frontend `.env`
```
VITE_API_BASE_URL=http://localhost:5000/api
VITE_ENV=development
VITE_DEFAULT_LANGUAGE=en
```

### Backend `.env`
```
# Server
PORT=5000
NODE_ENV=development

# Database (Future)
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/exam-jacko

# Authentication (Future)
JWT_SECRET=your-jwt-secret-key
JWT_EXPIRE=7d

# AI API (Future)
GEMINI_API_KEY=your-gemini-api-key

# CORS
CORS_ORIGIN=http://localhost:3000

# Logging
LOG_LEVEL=info
```

⚠️ **CRITICAL:** Never commit `.env` files. Always use `.env.example` as template.

## 🔐 Security

✅ **Implemented:**
- API keys stored in `.env` files (not in code)
- Environment-based configuration
- CORS protection
- Input validation
- Request/response logging
- Structured error handling

🔜 **Planned:**
- JWT authentication with bcrypt hashing
- Rate limiting middleware
- MongoDB with secure connection
- HTTPS/TLS enforcement
- Data encryption
- SQL/NoSQL injection prevention

## 📚 Available Scripts

### Frontend
```bash
npm run dev      # Start development server (Vite)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Lint code (when configured)
```

### Backend
```bash
npm start        # Start production server
npm run dev      # Start with nodemon (hot reload)
npm test         # Run tests (when configured)
```

## 🎓 Supported Exams

1. **UPSC** - Union Public Service Commission
2. **BPSC** - Bihar Public Service Commission
3. **SSC** - Staff Selection Commission
4. **Railway** - Indian Railways Group D/NTPC
5. **Bihar** - State level exams

## 🌐 Supported Languages

- 🇬🇧 **English** (en)
- 🇮🇳 **Hindi** (hi)

Toggle language from navbar - preference stored in localStorage.

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛣️ Development Roadmap

### Phase 1 - MVP (Current)
- ✅ Project structure
- ✅ Frontend UI (React + Vite)
- ✅ Backend API structure
- ✅ Authentication routes
- ✅ Chat interface
- ✅ MCQ practice
- ✅ Current affairs
- ✅ Bilingual support
- ⏳ API integration testing

### Phase 2 - Production Ready
- [ ] MongoDB integration
- [ ] Real JWT authentication
- [ ] Google Gemini AI integration
- [ ] Email verification
- [ ] Password reset
- [ ] User progress persistence
- [ ] Rate limiting
- [ ] Error monitoring (Sentry)

### Phase 3 - Enhanced Features
- [ ] Advanced search filters
- [ ] Mock tests/exams
- [ ] Performance analytics
- [ ] Study recommendations
- [ ] Mobile app (React Native)
- [ ] Admin dashboard
- [ ] Payment integration (Stripe)
- [ ] Premium features

## 🐛 Known Issues & Limitations

- **Backend:** Using mock data (in-memory storage). Replace with MongoDB.
- **Auth:** Basic mock implementation. Use JWT + bcrypt in production.
- **AI Chat:** Mock responses. Integrate Google Gemini API for real AI.
- **Data:** All data resets on server restart. Need persistent storage.

## 💡 Tips for Development

1. **Frontend debugging:** Open DevTools (F12) → Console/Network tabs
2. **Backend debugging:** Check logs in terminal; add `console.log()` as needed
3. **i18n:** Edit JSON files in `frontend/src/i18n/locales/`
4. **API testing:** Use Postman/Insomnia to test endpoints
5. **Responsive design:** Use DevTools device toolbar to test mobile

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create feature branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -m 'Add YourFeature'`
4. Push branch: `git push origin feature/YourFeature`
5. Open Pull Request

## 📝 License

MIT License - see LICENSE file for details

## 📞 Support

- 🐛 **Bug Reports:** [GitHub Issues](https://github.com/fizanaz5002-lab/exam-jacko-ai-bot/issues)
- 💬 **Discussions:** [GitHub Discussions](https://github.com/fizanaz5002-lab/exam-jacko-ai-bot/discussions)
- 📧 **Email:** Support via GitHub (future)

## ⚖️ Disclaimer

This project is designed to supplement exam preparation and is **not** an official exam preparation service. Always refer to official exam guidelines and syllabi for accurate information.

---

**Built with ❤️ for Indian exam aspirants | Exam Jacko AI Bot**
