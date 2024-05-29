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
				openSans: ["Open Sans", "ui-sans-serif", "system-ui"],
			},
			padding: {
				"signup-padding": "26.25rem",
			},
      backgroundImage: {
        'events-bg': "url('src/assets/eventsbg.jpg')"
      }
		},
	},
	plugins: [],

}

// ** TAILWIND CSS  FONT GUIDE **

// ** FONT FAMILY **
// font-sans: Applies a sans-serif font family.
// font-serif: Applies a serif font family.
// font-mono: Applies a monospace font family.

// ** FONT SIZE **
// text-xs: 0.75rem
// text-sm: 0.875rem
// text-base: 1rem
// text-lg: 1.125rem
// text-xl: 1.25rem
// text-2xl: 1.5rem
// text-3xl: 1.875rem
// text-4xl: 2.25rem
// text-5xl: 3rem
// text-6xl: 3.75rem
// text-7xl: 4.5rem
// text-8xl: 6rem
// text-9xl: 8rem

// ** FONT WEIGHT **
// font-thin: 100
// font-extralight: 200
// font-light: 300
// font-normal: 400
// font-medium: 500
// font-semibold: 600
// font-bold: 700
// font-extrabold: 800
// font-black: 900


// ** TEXT ALIGNMENT **
// text-left: Left align text
// text-center: Center align text
// text-right: Right align text
// text-justify: Justify text

// ** TEXT COLOR **
// text-{color}: Set text color (e.g., text-red-500, text-blue-700)
