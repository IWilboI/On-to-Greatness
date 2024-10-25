import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'public', // Make sure this is pointing to the public folder
  build: {
    outDir: '../dist',
  },
});
