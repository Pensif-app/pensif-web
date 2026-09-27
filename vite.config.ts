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
        mentionsLegales: resolve(import.meta.dirname, 'mentions-legales.html'),
        support: resolve(import.meta.dirname, 'support.html'),
        contact: resolve(import.meta.dirname, 'contact.html'),
        conditionsUtilisation: resolve(import.meta.dirname, 'conditions-utilisation.html'),
      },
    },
  },
})
