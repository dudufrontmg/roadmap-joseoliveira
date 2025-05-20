import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'recharts',
      'xlsx',
      'date-fns',
      'clsx',
      'lucide-react'
    ]
  },
  publicDir: 'public',
  server: {
    watch: {
      usePolling: true,
      interval: 100
    },
    fs: {
      strict: false,
      allow: ['..']
    },
    hmr: {
      overlay: true
    },
    port: 5173,
    host: true
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return;
        }
        warn(warning);
      }
    }
  },
  clearScreen: false
});