import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            gotham: ['"Gotham Rounded"', 'sans-serif'],
        },
        backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        colors: {
            base: '#F7F7F7',
            light: '#E4F6FF',
            medium: '#A5D4EE',
            dark: '#068CD0',
            darker: '#00699E'
        },
    },
  },
  plugins: [
    function ({ addUtilities } : any) {
        const newUtilities = {
            ".no-scrollbar::-webkit-scrollbar" : {
                "display": "none"
            },

            ".no-scrollbar" : {
                "-ms-overflow-style": "none", 
                "scrollbar-width": "none"
            }
        }

        addUtilities(newUtilities)
    }
  ],
};
export default config;
