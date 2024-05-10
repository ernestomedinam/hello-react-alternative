import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
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
        port: 8000
    }
});

