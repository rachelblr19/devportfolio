// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
site: "https://{your_github_username}.github.io",
base: "/{forked_repo_name}/",
vite: {
plugins: [tailwindcss()],
},
}); 