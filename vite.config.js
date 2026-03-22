import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/site-[hash].js',
        chunkFileNames: 'assets/chunk-[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (name?.endsWith('.css')) {
            return 'assets/site-[hash][extname]';
          }

          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
