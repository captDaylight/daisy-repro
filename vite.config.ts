import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  // @ts-ignore
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false
  }
});
