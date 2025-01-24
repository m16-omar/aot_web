module.exports = {
    mode: "jit",
    content: ["**/*.{html,js}", "**/**/*.{html,js}", "./index.html"],
    darkMode: "class",
    theme: {},
    screens: {
      md: { max: "1050px" },
      sm: { max: "550px" },
    },
    extend: {},
    colors: {
      amber: { 500: "var(--amber_500)" },
      background: "var(--background)",
      background_n: "var(--background_n)",
      blue_gray: { 900: "var(--blue_gray_900)" },
      deep_purple: {
        100_02: "var(--deep_purple_100_02)",
        100_33: "var(--deep_purple_100_33)",
        a200_02: "var(--deep_purple_a200_02)",
        a200_33: "var(--deep_purple_a200_33)",
        a200_7f: "var(--deep_purple_a200_7f)",
      },
      gray: {
        300: "var(--gray_300)",
        400: "var(--gray_400)",
      },
      high_contrast: "var(--high_contrast)",
      light_blue: { 600: "var(--light_blue_600)" },
      low_contrast: "var(--low_contrast)",
      medium_contrast: "var(--medium_contrast)",
      primary: "var(--primary)",
      primary_shades: "var(--primary_shades)",
      purple: { 600: "var(--purple_600)" },
      white: "var(--white)",
      black: { 600: "var(--black_600)" },
      gray_shadow: "var(--gray_shadow)",
    },
    boxShadow: {
      xs: "0 0 13px 5px #00000029",
    },
    fontFamily: {
      neuemontreal: "Neue Montreal",
      poppins: "Poppins",
    },
    backgroundImage: {
      gradient: "linear-gradient(90deg, #cebce933, #cebce902)",
    },
    plugins: [require("@tailwindcss/forms")],
  };