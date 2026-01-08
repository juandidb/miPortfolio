import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Set base to the repository name for GitHub Pages
  // This ensures `import.meta.env.BASE_URL` is a proper path (e.g. '/miPortfolio/')
  // Use relative paths so the generated `index.html` refers to assets
  // with `./assets/...` which works for both custom domains and GitHub Pages paths.
  base: './',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
})
