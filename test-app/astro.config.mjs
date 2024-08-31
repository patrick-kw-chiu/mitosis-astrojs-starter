import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import solid from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
	integrations: [
		react({
			include: ["**/react/**"],
		}),
		solid({
			include: ["**/solid/**"],
		}),
		vue(),
		svelte(),
	],
});
