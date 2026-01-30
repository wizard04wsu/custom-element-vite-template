import { defineConfig } from "vite";

// Template placeholders:
// - Tag: my-element
// - Output file: my-element.js
// - Global name: MyElementBundle
export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: "src/main.ts",
      name: "MyElementBundle",
      formats: ["iife"],
      fileName: () => "my-element.js",
    },
  },
});
