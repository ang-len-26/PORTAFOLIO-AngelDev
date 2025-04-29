import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/PORTAFOLIO-AngelDev/', // 👈 necesario para GitHub Pages
  plugins: [react()],
})
