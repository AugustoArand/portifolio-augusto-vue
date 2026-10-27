import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.VITE_BASE || '/',
  server: {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: [process.env.RAILWAY_PUBLIC_DOMAIN].filter(Boolean),
  },
})
