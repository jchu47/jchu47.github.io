import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/jchu47.github.io-portfolio/',
  build: {
    outDir: 'docs',
  },
});
