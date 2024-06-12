/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				'eventbg': "url('public/images/eventsbg.jpg')",
				'subscribebg': "url('public/images/subscribebg.png')"
			},
		}
	},
	plugins: [],
}
