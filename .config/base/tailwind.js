const MODULES_DIR = "F:\\tools\\.pnpm-global\\5\\node_modules\\";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"**/public/**/*.html",
		"**/src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}",
	],
	darkMode: "media",
	theme: {
		container: {
			center: true,
		},
	},
	variants: {},
	plugins: [
		require(`${MODULES_DIR}@tailwindcss/forms`),
		require(`${MODULES_DIR}@tailwindcss/typography`),
		require(`${MODULES_DIR}@tailwindcss/aspect-ratio`),
	],
};
