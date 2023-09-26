/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      Manga: {
        100: "#efedef",
        200: "#c3bcc3",
        300: "#655f67",
      },
      void: "#0f0913",
      bgold: {
        100: "#fffba4",
        200: "#d2b863",
        300: "#ad832d",
        400: "#3d2e10",
      },
      bblue: {
        100: "#b2e3f0",
        200: "#33b6d8",
        300: "#14596b",
        400: "#0c3640",
      },
      bred: {
        100: "#f8bdb9",
        200: "#ec4237",
        300: "#a3180f",
        400: "#460a07",
      },
    },
  },
  plugins: [],
};
