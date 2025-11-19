import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import m from 'mithril'

// Define Fragment for JSX usage
m.Fragment = { 
  view: (vnode) => vnode.children 
}

export default defineConfig({
  esbuild: {
    jsxFactory: 'm',
    jsxFragment: 'm.Fragment',
  },
  plugins: [
    tailwindcss(),
  ],
})
