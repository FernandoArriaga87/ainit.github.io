const config = {
	content: [
	  './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	  './node_modules/flowbite/**/*.js', // Agrega esta línea
	],
	theme: {
	  extend: {},
	},
	plugins: [
	  require('flowbite/plugin'), // Agrega esta línea
	],
  };
  
  export default config;