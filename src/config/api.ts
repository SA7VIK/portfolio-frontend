// API Configuration
const API_CONFIG = {
  // Development
  development: {
    baseUrl: 'http://localhost:8000',
    chatEndpoint: 'http://localhost:8000/chat',
    blogsEndpoint: 'http://localhost:8000/medium-blogs',
    healthEndpoint: 'http://localhost:8000/health'
  },
  // Production - Updated with actual Render backend URL
  production: {
    baseUrl: 'https://portfolio-backend-bgh1.onrender.com',
    chatEndpoint: 'https://portfolio-backend-bgh1.onrender.com/chat',
    blogsEndpoint: 'https://portfolio-backend-bgh1.onrender.com/medium-blogs',
    healthEndpoint: 'https://portfolio-backend-bgh1.onrender.com/health'
  }
}

// Get current environment
const isProduction = process.env.NODE_ENV === 'production'
const config = isProduction ? API_CONFIG.production : API_CONFIG.development

export default config 