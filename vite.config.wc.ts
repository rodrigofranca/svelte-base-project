import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import svg from "@poppanator/sveltekit-svg";
import path from "path";
import mkcert from "vite-plugin-mkcert";

const project = "my-project";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({ emitCss: false, compilerOptions: { dev: true } }),
    mkcert(),
  ],
  build: {
    // minify: true,
    rollupOptions: {
      // name: `${project}`,
      input: "./src/App.wc.ts",
      output: {
        inlineDynamicImports: true,
        entryFileNames: `${project}.js`,
        dir: "./packages/",
      },
    },
  },
  resolve: {
    alias: {
      $: path.resolve("./src"),
    },
  },
});
