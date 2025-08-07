import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,         // Permet l'accès depuis Docker
    port: 5173,         // Port par défaut de Vite
    watch: {
      usePolling: true, // Recommandé avec les volumes Docker
    },
  },
  build: {
    sourcemap: true,
  },
});
