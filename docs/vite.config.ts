import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";


export default defineConfig({
  plugins: [
    SearchPlugin({
      placeholder: "Looking for Something!",
      buttonLabel: "Search Here ...",
      previewLength: 20,
    }),
  ],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ["../.."],
    },
  },
});