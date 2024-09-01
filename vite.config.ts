/// <reference types="vitest" />
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { defaultExclude, defaultInclude } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        environment: "jsdom",
        include: [...defaultInclude],
        exclude: [...defaultExclude],
        setupFiles: ["setupTests.ts"],
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        }
    }
});
