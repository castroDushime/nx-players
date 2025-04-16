import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {ViteImageOptimizer} from "vite-plugin-image-optimizer";
import path from 'path-browserify';
export default defineConfig({
  plugins: [react(),
    ViteImageOptimizer({
      png: {
        quality: 10,
      },
    }),
  ],
  server: {
    fs: {
      allow: ['.'], // allow serving files from project root
    },
  },
  build: {
    rollupOptions: {
      external: [
        // ignore non-js directories
        '**/.git/**',
      ],
    },
  },
  optimizeDeps: {
    exclude: ['.git'],
  },
  resolve: {
    alias: {
      'path': 'path-browserify',
      '@': path.resolve(__dirname, './src'),
      'global': 'global'
    }
  }
})
