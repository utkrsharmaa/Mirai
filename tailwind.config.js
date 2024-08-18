/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src-tauri/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    transitionDuration: {
      DEFAULT: "150ms",
      75: "75ms",
      100: "100ms",
      130: "130ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      400: "400ms",
      500: "500ms",
      700: "700ms",
      1000: "1000ms",
    },
    transitionTimingFunction: {
      "ease-in-quad": "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
      "ease-in-cubic": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
      "ease-in-quart": "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
      "ease-in-quint": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
      "ease-in-sine": "cubic-bezier(0.47, 0.0, 0.745, 0.715)",
      "ease-in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
      "ease-in-circ": "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
      "ease-in-back": "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
      "ease-out-quad": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      "ease-out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1.0)",
      "ease-out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1.0)",
      "ease-out-quint": "cubic-bezier(0.23, 1.0, 0.32, 1.0)",
      "ease-out-sine": "cubic-bezier(0.39, 0.575, 0.565, 1.0)",
      "ease-out-expo": "cubic-bezier(0.19, 1.0, 0.22, 1.0)",
      "ease-out-circ": "cubic-bezier(0.075, 0.82, 0.165, 1.0)",
      "ease-out-back": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      "ease-in-out-quad": "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
      "ease-in-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1.0)",
      "ease-in-out-quart": "cubic-bezier(0.77, 0.0, 0.175, 1.0)",
      "ease-in-out-quint": "cubic-bezier(0.86, 0.0, 0.07, 1.0)",
      "ease-in-out-sine": "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
      "ease-in-out-expo": "cubic-bezier(1.0, 0.0, 0.0, 1.0)",
      "ease-in-out-circ": "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
      "ease-in-out-back": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
    extend: {
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.5rem", // 24px
        xl: "2rem", // 32px
        "2xl": "3rem", // 48px
      },
    },
    plugins: [require("@whiterussianstudio/tailwind-easing")],
    variants: {
      extend: {
        transitionTimingFunction: ["responsive", "hover", "active", "focus"],
      },
    },
  },
};
