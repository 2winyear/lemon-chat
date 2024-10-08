import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server:{
    port:80,
    host:"0.0.0.0"
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
