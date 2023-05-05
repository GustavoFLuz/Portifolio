import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

dotenv.config();
const { PORT = '3000'} = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(PORT),
  }
})
