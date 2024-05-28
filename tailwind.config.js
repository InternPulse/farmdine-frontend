/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				green0: "#8BC34A",
				green47: "#658E36",
				green100: "#425D23",
				"signup-form-background": "#F6F6F6",
				"form-gray": "#A8A8A8",
			},
			backgroundColor: {
			'lime-custom': 'rgba(139, 195, 74, 0.17)', // Custom color
			},
			fontFamily: {
				sans: ["Roboto", "ui-sans-serif", "system-ui"],
				openSans: ['"Open Sans"', "ui-sans-serif", "system-ui"],
			},
			padding: {
				"signup-padding": "26.25rem",
			},
		},
	},
	plugins: [],
}
