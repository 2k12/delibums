/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@fortawesome/fontawesome-free/css/all.css", // Agregar aquí
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["PlayfairDisplay", "sans-serif"], // Reemplaza 'sans' si quieres usarla como fuente predeterminada
      },
    },
  },
  plugins: [],
};
