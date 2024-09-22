import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  // important: '#root',
  // corePlugins: {
  //   // Remove the Tailwind CSS preflight styles so it can use Material UI's preflight instead (CssBaseline).
  //   preflight: true,
  // },
  plugins: [],
};
export default config;
