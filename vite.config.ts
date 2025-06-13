import { resolve } from 'path';

import react from '@vitejs/plugin-react';
// import { visualizer } from 'rollup-plugin-visualizer';
import { type PluginOption, defineConfig } from 'vite';

const outDir = 'docs' as const;
const plugins: PluginOption[] = [react()];

// visualizer must be last
// plugins.push(visualizer({ open: false }));

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sudoku/',
  build: {
    chunkSizeWarningLimit: 200,
    copyPublicDir: true,
    emptyOutDir: true,
    outDir,
  },
  clearScreen: false,
  plugins,
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
  },
});
