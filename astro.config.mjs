// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [icon()],
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Inter",
    cssVariable: "--font-inter",
  }, {
    provider: fontProviders.fontsource(),
    name: "Fira Code",
    cssVariable: "--font-fira-code",
  },
  {
    provider: fontProviders.fontsource(),
    name: "Jost",
    cssVariable: "--font-jost",
  },
],
});