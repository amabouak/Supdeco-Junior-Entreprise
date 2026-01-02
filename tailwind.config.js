/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	colors: {
  		transparent: 'transparent',
  		current: 'currentColor',
  		white: '#ffffff',
  		black: '#000000',
  		blue: '#0066CC',
  		lightblue: '#E6F0FF',
      lightskyblue: '#B3D9FF',
      navyblue: '#003366',
      beachblue: '#8EB8E6',
      circlebg: 'rgba(77, 143, 213, 0.25)',
      darkblue: '#001A33',
      offwhite: 'rgba(255, 255, 255, 0.75);',
      bordertop: 'rgba(196, 196, 196, 0.5);',
      'blue-500': '#0066CC',
      darkgray: '#8EB8E6',
      babyblue: '#E6F2FF',
      grey500: '#ECECEC',
      bluegray: '#7A9CC6',
      bluegrey: '#6B8CB8',
      midnightblue: '#003D7A',
      midblue: '#0052A3',
      bluebg: 'rgba(0, 102, 204, 0.2)',
      border: 'rgba(128, 144, 160, 0.35)',
      azure: {
			'50': '#f0f9ff',
			'100': '#e0f2fe',
			'200': '#bae6fd',
			'300': '#7dd3fc',
			'400': '#38bdf8',
			'500': '#0ea5e9',
			'600': '#0284c7',
			'700': '#0369a1',
			'800': '#075985',
			'900': '#0c4a6e',
			'950': '#082f49',
		},
  	},
  	fontSize: {
  		xs: ["0.75rem", { lineHeight: "1rem" }],
  		sm: ["0.875rem", { lineHeight: "1.25rem" }],
  		base: ["1rem", { lineHeight: "1.5rem" }],
  		lg: ["1.125rem", { lineHeight: "1.75rem" }],
  		xl: ["1.25rem", { lineHeight: "1.75rem" }],
  		'2xl': ["1.5rem", { lineHeight: "2rem" }],
  		'3xl': ["1.875rem", { lineHeight: "2.25rem" }],
  		'4xl': ["2.25rem", { lineHeight: "2.5rem" }],
  		'5xl': ["3rem", { lineHeight: "1" }],
  		'6xl': ["3.75rem", { lineHeight: "1" }],
  		'7xl': ["4.5rem", { lineHeight: "1" }],
  		'8xl': ["6rem", { lineHeight: "1" }],
  		'9xl': ["8rem", { lineHeight: "1" }],
  		'65xl': ["65px", { lineHeight: "1" }],
  		'80xl': ["80px", { lineHeight: "6rem" }]
  	},
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		animation: {
  			'background-position-spin': 'background-position-spin 3000ms infinite alternate',
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
  		},
  		keyframes: {
  			'background-position-spin': {
  				'0%': {
  					backgroundPosition: 'top center'
  				},
  				'100%': {
  					backgroundPosition: 'bottom center'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
