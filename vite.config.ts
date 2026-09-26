import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        partenaires: resolve(import.meta.dirname, 'partenaires.html'),
        confidentialite: resolve(import.meta.dirname, 'confidentialite.html'),
      },
    },
  },
})
