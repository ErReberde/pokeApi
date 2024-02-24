import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

process.env = {...process.env, ...loadEnv("dev", process.cwd())};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    hmr: {
        host: "localhost",
        port: 3500,
        protocol: "ws",

    },
},
})
