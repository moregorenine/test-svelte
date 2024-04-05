import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import Icons from "unplugin-icons/vite"; //https://www.npmjs.com/package/unplugin-icons?activeTab=readme

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), Icons({ autoInstall: true, compiler: "svelte" })],
  base: "/test-svelte/",
});
