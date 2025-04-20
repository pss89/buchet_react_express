import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // '/api': {
      //   target: 'http://localhost:5000', // Express 서버 주소
      //   changeOrigin: true,
      //   secure: false,
      // },
      '/api': 'http://localhost:5000', // Express 서버 주소
    },
  },
})
