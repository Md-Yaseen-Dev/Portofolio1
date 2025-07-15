import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        // Modern Brand Colors
        "electric-indigo": "hsl(var(--electric-indigo))",
        "sky-blue": "hsl(var(--sky-blue))",
        "emerald": "hsl(var(--emerald))",
        "coral": "hsl(var(--coral))",
        "neon-pink": "hsl(var(--neon-pink))",
        "warm-yellow": "hsl(var(--warm-yellow))",
        "sunset-orange": "hsl(var(--sunset-orange))",
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "gradient-shift": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        "parallax-float": {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(30px, -20px) rotate(90deg)" },
          "50%": { transform: "translate(-10px, 30px) rotate(180deg)" },
          "75%": { transform: "translate(-30px, -10px) rotate(270deg)" },
          "100%": { transform: "translate(0, 0) rotate(360deg)" },
        },
        "float-complex": {
          "0%, 100%": { 
            transform: "translateY(0px) translateX(0px) scale(1) rotate(0deg)",
            opacity: "0.1"
          },
          "25%": { 
            transform: "translateY(-40px) translateX(30px) scale(1.1) rotate(90deg)",
            opacity: "0.2"
          },
          "50%": { 
            transform: "translateY(-80px) translateX(-20px) scale(0.9) rotate(180deg)",
            opacity: "0.15"
          },
          "75%": { 
            transform: "translateY(-40px) translateX(-40px) scale(1.05) rotate(270deg)",
            opacity: "0.25"
          },
        },
        "shimmer": {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "0.8",
            transform: "scale(1)",
            "box-shadow": "0 0 0 0 rgba(99, 102, 241, 0.7)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.1)",
            "box-shadow": "0 0 0 10px rgba(99, 102, 241, 0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-shift": "gradient-shift 4s ease infinite",
        "parallax-float": "parallax-float 25s linear infinite",
        "float-complex": "float-complex 20s ease-in-out infinite",
        "shimmer": "shimmer 4s infinite",
        "pulse-glow": "pulse-glow 2s infinite",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.4)',
        'glow-lg': '0 0 40px rgba(99, 102, 241, 0.6)',
        'neon': '0 0 25px rgba(255, 0, 255, 0.7)',
        'coral': '0 0 30px rgba(248, 113, 113, 0.5)',
        'emerald': '0 0 30px rgba(16, 185, 129, 0.5)',
        'sky': '0 0 30px rgba(56, 189, 248, 0.5)',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
