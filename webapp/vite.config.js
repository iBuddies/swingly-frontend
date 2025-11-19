import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using React plugin is optional when not transforming, but keep for DX if installed later.
export default defineConfig({
  plugins: [react()],
  server: { port: 5173, host: true }
})

