import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/movietime/',  // Voeg dit toe met de naam van je repo
  plugins: [react()],
})
