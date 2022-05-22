module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#304269",
            secondary: "#91BED4",
            accent: "#F26101",
            neutral: "#D9E8F5",
            "base-100": "#ffffff",
          },
        },
        "dark",
        "cupcake",
      ],
    },
    plugins: [require("daisyui")],
  }