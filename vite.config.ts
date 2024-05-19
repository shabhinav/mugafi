import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@components", replacement: path.resolve(__dirname, "src/components") },
      { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
      { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
      { find: "@types", replacement: path.resolve(__dirname, "src/types") },
    ],
  },
})
