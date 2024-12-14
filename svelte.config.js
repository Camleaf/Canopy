import adapterNode from '@sveltejs/adapter-node';
import adapterAuto from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {}
};

if (process.env.HEY_ITS_ME_YOUR_NODE) {
  config.kit.adapter = adapterNode();
} else {
  config.kit.adapter = adapterAuto();
}

export default config;