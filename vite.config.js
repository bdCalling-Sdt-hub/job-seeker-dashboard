import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // host: "192.168.10.195",
    host: "152.42.204.147",
    port: "3001",
  },
});
