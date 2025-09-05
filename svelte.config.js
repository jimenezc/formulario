import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			// Default options are shown; these can be set automatically on some platforms
			pages: 'build',
			assets: 'build',
			fallback: undefined, // Or a specific fallback page like '404.html'
			precompress: false,
			strict: true
		})
	}
};

export default config;
