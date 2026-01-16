import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use relative base so generated HTML references `./assets/...`.
  // This works for both a custom domain (root) and GitHub Pages subpaths.
  base: './',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
})
