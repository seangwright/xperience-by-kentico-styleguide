import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Xperience by Kentico Styleguide",
      description:
        "Application architecture, content, code, and design styleguide for Xperience by Kentico solutions",
      editLink: {
        baseUrl:
          "https://github.com/seangwright/xperience-by-kentico-styleguide",
      },
      logo: {
        light: "/src/assets/logo/Kentico-shortcut-color-positive-rgb.svg",
        dark: "/src/assets/logo/Kentico-shortcut-black-negative-rgb.svg",
        replacesTitle: true,
        alt: "Xperience by Kentico Styleguide",
      },
      social: {
        github:
          "https://github.com/seangwright/xperience-by-kentico-styleguide",
        youtube: "https://www.youtube.com/@kentico",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      lastUpdated: true,
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
