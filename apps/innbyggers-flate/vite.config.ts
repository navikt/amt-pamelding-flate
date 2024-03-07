import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    outDir: 'build'
  },
  server: {
    port: 3005,
    open: true
  },
  plugins: [react()]
})
