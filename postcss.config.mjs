/** @type {import('postcss-load-config').Config} */
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

// Use the @tailwindcss/postcss plugin. Disable Lightning CSS optimizations to
// avoid native binary resolution failures in some CI/build environments (Vercel).
export default {
  plugins: [
    tailwindcss({ optimize: false }),
    autoprefixer(),
  ],
};
