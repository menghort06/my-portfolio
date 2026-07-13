import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // Load environment variables based on mode
  // dev  -> .env.dev
  // prod -> .env.prod
  const env = loadEnv(mode, process.cwd(), '');
  console.log(`🚀 Running in ${mode} mode`);
  console.log(`📁 Base URL: ${env.VITE_BASE_URL || '/'}`);

  return {
    // Use environment value
    base: env.VITE_BASE_URL || '/',

    plugins: [
      vue(),
      tailwindcss(),
    ],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    server: {
      host: '0.0.0.0',
      port: 3000,
      
    },
  };
});