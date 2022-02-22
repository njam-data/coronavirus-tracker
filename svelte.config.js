import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'

const env = process.env.NODE_ENV

let base = ''
if (env === 'production') {
	base = '/coronavirus-tracker'
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
			base
		},
		trailingSlash: 'always'
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
