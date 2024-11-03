import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'


const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root,
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  base: '/hc-youth/',
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(root,  'index.html'),
        middle_school: resolve(root, 'MiddleSchool/index.html'),
        high_school: resolve(root, 'HighSchool/index.html'),
        young_adults: resolve(root, 'YoungAdults/index.html'),
        dashboard: resolve(root, 'Dashboard/index.html'),
        high_school_dashboard: resolve(root, 'Dashboard/HighSchool/index.html'),
        middle_school_dashboard: resolve(root, 'Dashboard/MiddleSchool/index.html'),
        young_adults_dashboard: resolve(root, 'Dashboard/YoungAdults/index.html'),
        login: resolve(root, 'Dashboard/Auth/Login/index.html'),
        signup: resolve(root, 'Dashboard/Auth/Signup/index.html'),
        newsletter: resolve(root, 'Newsletter/index.html'),
        dev: resolve(root, 'Dev/index.html'),


      }
    }
  }
})
