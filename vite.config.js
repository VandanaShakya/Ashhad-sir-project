import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    zoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" }
        },
   animation: {
        
        "spin-slow": "spin 1s linear infinite"
      },
  
  plugins: [
        tailwindcss(),
    react()],
})
