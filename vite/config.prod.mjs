import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path"
import tailwindcss from "@tailwindcss/vite"

const buildmsg = () => {
    return {
        name: 'buildmsg',
        buildStart() {
            process.stdout.write(`Building for production...\n`);
        },
        buildEnd() {
            const line = "---------------------------------------------------------";
            const msg = `Build for production wrapping up!`;
            process.stdout.write(`${line}\n${msg}\n${line}\n`);

            process.stdout.write(`✨ Done ✨\n`);
        }
    }
}

export default defineConfig({
    base: './',
    plugins: [
        react(),
        buildmsg(), 
        tailwindcss()
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "..", "src")
      },
    },    
    logLevel: 'warning',
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    phaser: ['phaser']
                }
            }
        },
        minify: 'terser',
        terserOptions: {
            compress: {
                passes: 2
            },
            mangle: true,
            format: {
                comments: false
            }
        }
    }
});
