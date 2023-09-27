import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const PROD = process.env.NODE_ENV === "production";

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
            {
              label: "Solution Setup",
              link: "/guides/solution-setup",
            },
            {
              label: ".NET and C#",
              link: "/guides/dotnet-csharp",
            },
            {
              label: "Platform Customization",
              link: "/guides/platform-customization",
            },
            {
              label: "Admin Customization",
              link: "/guides/admin-customization",
            },
            {
              label: "ASP.NET Core",
              link: "/guides/aspnet-core",
            },
            {
              label: "Page Builder",
              link: "/guides/page-builder",
            },
          ],
        },
        {
          label: "Examples",
          collapsed: true,
          autogenerate: { directory: "examples" },
        },
      ],
      lastUpdated: true,
      customCss: ["./src/styles/site.css"],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
