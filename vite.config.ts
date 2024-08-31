import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Asegúrate de que el alias coincida con la ruta base en tu tsconfig
    },
  },
});
