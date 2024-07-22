/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
        plugins: [
            react(), {
                ...eslintPlugin({
                    cache: false,
                    include: ['./src/**/*.js', './src/**/*.jsx'],
                    exclude: []
                }),
                apply: "build",
            }, {
                ...eslintPlugin({
                    cache: false,
                    include: ['./src/**/*.js', './src/**/*.jsx'],
                    exclude: [],
                    failOnWarning: false,
                    failOnError: false
                }),
                apply: "serve",
                enforce: "post"
            }
        ],
        server: {
            port: 8000,
            host: "127.0.0.1"
        },
        test: {
            include: ["./**/*.test.js", "./**/*.test.jsx"],
            environment: "jsdom",
            globals: true,
            setupFiles: ["./vitest.setup.js"]
        }
    };
});
