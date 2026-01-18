/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@fortawesome/fontawesome-free/css/all.css",
  ],
  theme: {
    extend: {
      colors: {
        'chocolate': '#2d1b14',
        'terracotta': '#e07a5f',
        'cream': '#fdfbf7',
        'off-white': '#fafafa',
        'soft-pink': '#eec0c6', // Soft pink as requested
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        sans: ["Outfit", "sans-serif"], // Minimalist geometric sans
      },
      container: {
        center: true,
        padding: '2rem',
      }
    },
  },
  plugins: [],
};
