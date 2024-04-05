import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import Icons from "unplugin-icons/vite"; //https://www.npmjs.com/package/unplugin-icons?activeTab=readme
import { imagetools } from "vite-imagetools";
import { prefetch } from "./prefetch-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    prefetch(),
    Icons({ autoInstall: true, compiler: "svelte" }),
    imagetools({}),
  ],
  base: "/test-svelte/",
});
