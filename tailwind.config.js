/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: '#B1A7F2',
				"dark-purple": '#161428',
			},
		},
	},
	plugins: [
		require('@tailwindcss/container-queries'),
	],
}
