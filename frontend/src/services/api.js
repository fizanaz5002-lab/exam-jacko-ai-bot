import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth APIs
export const authAPI = {
  register: (email, password, name) =>
    api.post('/auth/register', { email, password, name }),
  login: (email, password) =>
    api.post('/auth/login', { email, password }),
  logout: () =>
    api.post('/auth/logout'),
};

// Chat APIs
export const chatAPI = {
  sendMessage: (message, userId, language = 'en') =>
    api.post('/chat/message', { message, userId, language }),
  getHistory: (userId) =>
    api.get('/chat/history', { params: { userId } }),
  clearHistory: (userId) =>
    api.delete(`/chat/history/${userId}`),
};

// MCQ APIs
export const mcqAPI = {
  generate: (exam, topic, count = 5, language = 'en') =>
    api.post('/mcq/generate', { exam, topic, count, language }),
  getByExam: (exam, language = 'en') =>
    api.get(`/mcq/by-exam/${exam}`, { params: { language } }),
  submitAnswer: (mcqId, selectedAnswer, userId) =>
    api.post('/mcq/submit-answer', { mcqId, selectedAnswer, userId }),
};

// Current Affairs APIs
export const currentAffairsAPI = {
  getLatest: (language = 'en', limit = 10) =>
    api.get('/current-affairs/latest', { params: { language, limit } }),
  getByCategory: (category, language = 'en') =>
    api.get(`/current-affairs/by-category/${category}`, { params: { language } }),
  getRelatedToExam: (exam, language = 'en') =>
    api.get(`/current-affairs/related-to-exam/${exam}`, { params: { language } }),
};

// Questions APIs
export const questionsAPI = {
  getByExam: (exam, language = 'en') =>
    api.get(`/questions/by-exam/${exam}`, { params: { language } }),
  search: (keyword, language = 'en') =>
    api.get('/questions/search', { params: { keyword, language } }),
  getByDifficulty: (level, language = 'en') =>
    api.get(`/questions/difficulty/${level}`, { params: { language } }),
};

// Health check
export const healthCheck = () =>
  api.get('/health');

export default api;
