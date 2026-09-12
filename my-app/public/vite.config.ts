import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/woo-api": {
        target: "http://abhishekshop.local",
        changeOrigin: true,
        secure: false,
        rewrite: (path) =>
          path.replace(/^\/woo-api/, ""),
      },
    },
  },
});