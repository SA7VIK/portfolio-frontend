import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  define: {
    __API_BASE_URL__: JSON.stringify(process.env.NODE_ENV === 'production' ? 'https://api.sa7vik.in' : 'http://localhost:8000')
  }
}) 