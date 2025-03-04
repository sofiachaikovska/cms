import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import fs from 'fs';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        manifest: 'public/manifest.json',
      },
    },
  },
  // server: {
  //   https: {
  //     key: fs.readFileSync('./localhost-key.pem'),
  //     cert: fs.readFileSync('./localhost-cert.pem'),
  //   },
  // },
});
