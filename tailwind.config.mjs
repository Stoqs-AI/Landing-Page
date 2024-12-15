/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{ts,tsx}",
	  "./components/**/*.{ts,tsx}",
	  "./app/**/*.{ts,tsx}",
	  "./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
	  screens: {
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
		"2xl": "1536px",
		"3xl": "1800px",
	  },
	  container: {
		center: true,
		padding: "2rem",
		screens: {
		  "2xl": "1400px",
		},
	  },
	  extend: {
		backgroundImage: {
		  "gradient-180":
			"linear-gradient(180deg, #13222F 0%, rgba(0, 0, 0, 0.00) 100%)",
		},
		fontFamily: {
		  geistregular: ["Geist-Regular", "sans-serif"],
		  geistlight: ["Geist-Light", "sans-serif"],
		  geistthin: ["Geist-Thin", "sans-serif"],
		  noto: ["Noto Sans", "sans-serif"],
		},
		colors: {
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  ticker: {
			maxw: "200px",
			minw: "150px",
			tickerpad: "10px",
			tickergap: "14px",
			positivecolor: "#3AC024",
			negativecolor: "#BE2440",
			positivebg: "#092933",
			negativebg: "#1E2324",
		  },
		  customprompts: {
			bordercolor: "#1A88B8",
		  },
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		  },
		  secondary: {
			DEFAULT: "hsl(var(--secondary))",
			foreground: "hsl(var(--secondary-foreground))",
		  },
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		  },
		  accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
		  },
		  popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		  },
		  card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		  },
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		keyframes: {
		  "accordion-down": {
			from: { height: "0" },
			to: { height: "var(--radix-accordion-content-height)" },
		  },
		  "accordion-up": {
			from: { height: "var(--radix-accordion-content-height)" },
			to: { height: "0" },
		  },
		  marquee: {
			from: { transform: "translateX(0)" },
			to: { transform: "translateX(calc(-100% - var(--gap)))" },
		  },
		  levitate: {
			"0% 100%": { transform: "translateY(0)" },
			"50%": { transform: "translateY(-5px)" },
		  },
		},
		spacing: {
		  tickerpad: "10px",
		},
		animation: {
		  "accordion-down": "accordion-down 0.2s ease-out",
		  "accordion-up": "accordion-up 0.2s ease-out",
		  marquee: "marquee var(--duration) linear infinite",
		  levitate: "levitate 500ms infinite",
		},
	  },
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
  };
  