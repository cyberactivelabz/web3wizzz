import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Split framer-motion and react vendor chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          motion: ['framer-motion'],
        },
      },
    },
    // Warn if any chunk exceeds 250 kB after gzip
    chunkSizeWarningLimit: 250,
  },
});
