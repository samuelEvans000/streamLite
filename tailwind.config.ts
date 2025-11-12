import type { Config } from 'tailwindcss';

export default {
	content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				background: '#0b0b0f'
			}
		}
	},
	plugins: []
} satisfies Config;


