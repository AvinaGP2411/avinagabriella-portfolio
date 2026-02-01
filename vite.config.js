import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./",   // PENTING! supaya build bisa jalan di Netlify/GitHub Pages
  plugins: [react(), tailwindcss()],
  server: {
    open: true,
    host: false,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});