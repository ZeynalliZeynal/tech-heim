/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      DEFAULT: "1448px",
      padding: "24px",
    },
    colors: {
      primary: {
        DEFAULT: "#0c68f4",
        25: "#e4eefe",
        50: "#aecdfb",
        75: "#78abf9",
        100: "#428af6",
        200: "#2779f5",
        300: "#0c68f4",
        400: "#0951be",
        500: "#063a88",
        600: "#052e6d",
        700: "#042352",
        900: "#021736",
      },
      secondary: {
        DEFAULT: "#f45e0c",
        100: "#fddbc9",
        200: "#fab793",
        300: "#f68242",
        400: "#f45e0c",
        500: "#be4909",
        600: "#883406",
      },
      black: {
        DEFAULT: "#0c0c0c",
      },
      white: {
        DEFAULT: "#fff",
      },
      "neutral-gray": {
        100: "#f9f9f9",
        200: "#f6f6f6",
        300: "#ededed",
        400: "#cbcbcb",
        500: "#b4b4b4",
        600: "#9e9e9e",
        700: "#717171",
        800: "#505050",
        900: "#444",
        dark: "#2d2d2d",
      },
      error: {
        DEFAULT: "#c91433",
        light: "#fae7eb",
      },
      success: {
        success: "#146c43",
        "success-light": "#d1f7e5",
      },
    },
    fontSize: {
      "display-1": "4rem",
      "display-2": "3.5rem",
      h1: "2.75rem",
      h2: "2.5rem",
      h3: [
        "2rem",
        {
          fontWeight: 500,
        },
      ],
      h4: "1.5rem",
      h5: "1.25rem",
      h6: "1rem",
      "body-xl": "1.25rem",
      "body-lg": "1.125rem",
      "body-md": "1rem",
      "body-sm": "0.75rem",
      "body-xs": "0.625rem",
      "caption-lg": "0.875rem",
      "caption-md": "0.75rem",
      "caption-sm": "0.625rem",
      "button-lg": "1rem",
      "button-sm": "0.875rem",
      "overline-lg": "1rem",
      "overline-md": "0.75rem",
    },
    extend: {
      backgroundColor: {
        ripple: "rgba(0, 0, 0, 0.1)",
      },
      boxShadow: {
        sm: "-2px 2px 15px -1px rgba(113, 113, 113, 0.12)",
        md: "-2px 2px 20px -1px rgba(113, 113, 113, 0.2)",
        card: "0px 15px 20px rgba(0, 0, 0, 0.2)",
        tooltip: "0px 12px 28px 0px rgba(140, 149, 159, 0.3)",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
      },
      transition: {
        DEFAULT: "all 0.2s ease",
      },
      height: {
        sm: "36px",
        md: "48px",
        lg: "56px",
      },
      animation: {
        ripple: "ripple 700ms ease-in-out",
        swipe: "swipe 10s linear infinite",
      },
      keyframes: {
        ripple: {
          to: {
            opacity: 0,
            transform: "scale(50)",
          },
        },
        swipe: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },
  plugins: [require("@xpd/tailwind-3dtransforms")],
};
