import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3001,
    host: true,
    strictPort: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('react-dom') || id.includes('react/'))  return 'react-vendor';
          if (id.includes('framer-motion'))                        return 'motion';
          if (id.includes('recharts'))                             return 'charts';
          if (id.includes('react-router'))                         return 'router';
        },
      },
    },
  },
})
