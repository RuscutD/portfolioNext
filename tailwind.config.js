module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        pcw: "860px",
      },
      height: {
        pch: "630px",
      },
    },
    colors: {
      hard: "#012c43",
      medium: "#063f5d",
      soft: "#115173",
      yellow: "#ffd601",
      white: "#eeeeee",
      red: "#f95959",
    },
    screens: {
      sm: { max: "1200px" },
      lg: "1200px",
    },
  },
  plugins: [],
};
