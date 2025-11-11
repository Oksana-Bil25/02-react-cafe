import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssImport from "postcss-import";

export default defineConfig({
  plugins: [react()],
  // 👈 2. Додайте цю секцію:
  css: {
    postcss: {
      plugins: [postcssImport()],
    },
  },
});
