import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // Load environment variables based on mode
  // dev  -> .env.dev
  // prod -> .env.prod
  const env = loadEnv(mode, process.cwd(), '');


  return {
    // Use environment value
    base: '/',

    plugins: [
      vue(),
      tailwindcss(),
    ],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    server: {
      host: '0.0.0.0',
      port: 3000,

    },
  };
});