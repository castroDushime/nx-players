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
  resolve: {
    alias: {
      'path': 'path-browserify',
      '@': path.resolve(__dirname, './src'),
      'global': 'global'
    }
  }
})
