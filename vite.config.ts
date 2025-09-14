import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from "path"
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    open:true,
    port :3000,
  }, resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
