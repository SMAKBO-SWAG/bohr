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
        boxShadow: {
            'text': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        animation: {
            aurora: "aurora 6s ease-in-out infinite",
            'subtle-bounce': 'subtle-bounce 2s infinite',
        },
        keyframes: {
            aurora: {
                "0%, 100%": { transform: "translateX(0) translateY(-1.5%)" },
                "25%": { transform: "translateX(1.5%) translateY(0)" },
                "50%": { transform: "translateX(0) translateY(1.5%)" },
                "75%": { transform: "translateX(-1.5%) translateY(0)" },
            },
            'subtle-bounce': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' },
            },
        },
        fontFamily: {
            gotham: ['"Gotham Rounded"', 'sans-serif'],
        },
        colors: {
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
