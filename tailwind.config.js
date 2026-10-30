
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "481px",
            md: "769px",
            lg: "1081px",
            mlg: "1201px",
            xl: "1441px",
        },
        extend: {
            colors: {
                black: "#000000",
                "black-light": "#111111",
                "black-lighter": "#1a1a1a",

                white: "#ffffff",
                "white-dark": "#e5e5e5",

                "mono-gray": "#b3b3b3",
                "mono-gray-dark": "#666666",
                "mono-gray-darker": "#333333",

                "mono-shadow": "rgba(0, 0, 0, 0.7)",
            },
            fontFamily: {
                raleway: ["Raleway", "sans-serif"],
            },
        },
    },
    plugins: [],
};
