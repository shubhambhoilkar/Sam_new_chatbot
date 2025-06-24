import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use environment variable or default localhost
const backendURL = process.env.BACKEND_URL || 'http://localhost:9900';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/ws': {
        target: backendURL.replace(/^http/, 'ws'), // WebSocket proxy
        ws: true
      }
    }
  },
  define: {
    'process.env':{}
  }
});
