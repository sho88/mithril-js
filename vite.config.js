import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  esbuild: {
    jsxFactory: 'm',
    jsxFragment: 'Fragment',
  },
  plugins: [
    tailwindcss(),
  ],
})
