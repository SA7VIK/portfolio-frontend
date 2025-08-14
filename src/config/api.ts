// API Configuration
const API_CONFIG = {
  // Development
  development: {
    baseUrl: 'http://localhost:8000',
    chatEndpoint: 'http://localhost:8000/chat',
    blogsEndpoint: 'http://localhost:8000/medium-blogs',
    healthEndpoint: 'http://localhost:8000/health'
  },
  // Production - Updated with new Render backend URL
  production: {
    baseUrl: 'https://satvik-portfolio-backend.onrender.com',
    chatEndpoint: 'https://satvik-portfolio-backend.onrender.com/chat',
    blogsEndpoint: 'https://satvik-portfolio-backend.onrender.com/medium-blogs',
    healthEndpoint: 'https://satvik-portfolio-backend.onrender.com/health'
  }
}

// Get current environment
const isProduction = process.env.NODE_ENV === 'production'
const config = isProduction ? API_CONFIG.production : API_CONFIG.development

export default config 