import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG'], // Ensure Vite includes .PNG files as assets
  css: {
    postcss: {
      plugins: [],
    },
  },
});
