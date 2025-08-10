/** @type {import('tailwindcss').Config} */
export default {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				/*Importing fonts*/ mozilla: ['"Mozilla Headline"', "sans-serif"],
			},
		},
	},
};
