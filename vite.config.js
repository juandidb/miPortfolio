import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Set base to the repository name for GitHub Pages
  // This ensures `import.meta.env.BASE_URL` is a proper path (e.g. '/miPortfolio/')
  base: '/miPortfolio/',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
})
