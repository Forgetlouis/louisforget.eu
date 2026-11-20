import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://forgetlouis.github.io/louisforget.eu',
  base: '/louisforget.eu',
  integrations: [react(), tailwind()],
  output: 'static',
  trailingSlash: 'never',
  vite: {
    build: {
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {},
        },
      },
    },
  },
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
});
