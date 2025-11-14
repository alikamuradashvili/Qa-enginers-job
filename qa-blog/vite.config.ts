import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  server: {
    host: '0.0.0.0',
    port: 4200,
    allowedHosts: [
      'all',
      'localhost',
      '192.168.88.75',
      'hyman-dermatomic-imputedly.ngrok-free.dev'
    ],
    cors: true,
    strictPort: true
  }
});
