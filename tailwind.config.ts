import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
		'./content/**/*.tsx',
    "./app/**/*.tsx",
  ],
	safelist: [
    'bg-opaque-green-govtech', 
  ],
  theme: {
  	extend: {
			fontFamily: {
        sans: ['"Zen Kaku Gothic New"', 'sans-serif'],
				'dm-sans': ['"DM Sans"', 'sans-serif'],
			},
			fontSize: {
				'xs': '1rem',
			},
			screens: {
				'footer':'390px',
				'inter':'600px'
			},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
				'white-0.5': 'rgba(255, 255, 255, 0.5)',
				'red-dark': '#DD5868',
				'red-light': '#FBF4F5',
				'blue-sase': 'rgba(205, 232, 249, 0.65)',
				'opaque-blue-sase': '#BECDE4',
				'blue-radiok': '#dbf1fd',
				'green-govtech': 'rgba(167, 214, 201, 0.3)',
				'opaque-green-govtech': '#A7D8CA',
				'pink-wam': '#e7bfae',
				'black-radiok': '#1c1c1d',
				'grey-light': '#949494',
				'grey-dark': '#7A757C',
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
				moremuted: {
					DEFAULT: 'hsl(200, 12%, 90%)', 
					foreground: 'hsl(200, 8%, 80%)',
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
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
};
export default config;
