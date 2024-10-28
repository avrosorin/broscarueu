import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: [
		'variant',
		['@media (prefers-color-scheme: dark) { &:not(.light *)} ', '&:is(.dark *)']
	],
	theme: {
		extend: {
			animation: {
				blink: 'blink var(--blink-speed, 600ms) steps(2) infinite 150ms'
			},
			keyframes: {
				blink: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif']
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem'
				}
			}
		}
	},

	plugins: [typography, containerQueries, aspectRatio]
} as Config;
