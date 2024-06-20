import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

interface ImportMetaEnv {
  VITE_APP_TITLE: string;
  VITE_APP_VERSION: string;
  REACT_APP_API_BASE_URL: string;
  // Add other environment variables here
}