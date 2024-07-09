/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Inter", "sans-serif"],
    },
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
      banner: {
        wearable: {
          primary: "#223949",
          secondary: "#FF6951",
        },
      },
    },
    fontSize: {
      "display-1": "4rem",
      "display-2": "3.5rem",
      h1: [
        "2.75rem",
        {
          fontWeight: 600,
        },
      ],
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
      "body-sm": "0.875rem",
      "body-xs": "0.75rem",
      "caption-lg": "0.875rem",
      "caption-md": "0.75rem",
      "caption-sm": "0.625rem",
      caption: "0.75rem",
      "button-lg": "1rem",
      "button-sm": "0.875rem",
      "overline-lg": "1rem",
      "overline-md": "0.75rem",
      overline: "0.625rem",
    },
    extend: {
      backgroundColor: {
        ripple: "rgba(255, 255, 255, 0.1)",
      },
      boxShadow: {
        sm: "-2px 2px 15px -1px rgba(113, 113, 113, 0.12)",
        md: "-2px 2px 20px -1px rgba(113, 113, 113, 0.2)",
        card: "0px 15px 20px rgba(0, 0, 0, 0.2)",
        tooltip: "0px 12px 28px 0px rgba(140, 149, 159, 0.3)",
        button: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
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
        ripple: "ripple ease-in-out",
        swipe: "swipe 40s linear infinite",
        fadeIn: "fadeIn 300ms ease-in-out forwards",
        fadeOut: "fadeOut 300ms ease-in-out forwards",
      },
      keyframes: {
        ripple: {
          to: {
            opacity: 0,
            transform: "scale(500)",
            backgroundColor: "rgba(255, 255, 255, 1)",
          },
        },
        swipe: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-50% - 1rem))",
          },
        },
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        fadeOut: {
          from: {
            opacity: 1,
          },
          to: {
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [require("@xpd/tailwind-3dtransforms")],
};
