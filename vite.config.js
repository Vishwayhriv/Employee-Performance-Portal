import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.REACT_APP_USE_MOCK': JSON.stringify(process.env.REACT_APP_USE_MOCK || 'false')
  }
})