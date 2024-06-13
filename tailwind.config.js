/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				'eventbg': "url('public/images/eventsbg.jpg')",
				'subscribebg': "url('public/images/subscribebg.png')"
			},
			keyframes: {
				slideInLeft: {
				  '0%': { transform: 'translateX(-100%)', opacity: '0' },
				  '100%': { transform: 'translateX(0)', opacity: '1' },
				},
				slideInRight: {
				  '0%': { transform: 'translateX(100%)', opacity: '0' },
				  '100%': { transform: 'translateX(0)', opacity: '1' },
				},
			  },
			  animation: {
				slideInLeft: 'slideInLeft 1s forwards',
				slideInRight: 'slideInRight 1s forwards',
			},
		}
	},
	plugins: [],
}
