import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        react(), tailwindcss()
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "..", "src")
      },
    },    
    server: {
        port: 8080
    }
})
