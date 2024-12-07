import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Kinekt - Build REST APIs With High Precision",
  favicon: "img/kinekt-logo.svg",

  url: "https://kinekt.dev",
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "simplicity", // Usually your GitHub org/user name.
  projectName: "kinekt.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
        },
        pages: {
          remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: "Kinekt Logo",
        src: "img/kinekt-logo-with-text.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "right",
          label: "Docs",
        },
        {
          type: "html",
          position: "right",
          value: `
            <a target="_blank" href="https://bsky.app/profile/kinekt.dev">
              <img src="/img/bluesky.svg" alt="Logo" class="navbar-custom-icon navbar-bluesky-icon" />
            </a>
          `,
          className: "custom-navbar-item",
        },
        {
          type: "html",
          position: "right",
          value: `
              <a target="_blank" href="https://github.com/simplicity/kinekt">
                <img src="/img/github.svg" alt="Logo" class="navbar-custom-icon navbar-github-icon" />
              </a>
            `,
          className: "custom-navbar-item",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Links",
          items: [
            {
              label: "Bluesky",
              href: "https://bsky.app/profile/kinekt.dev",
            },
            {
              label: "GitHub",
              href: "https://github.com/simplicity/kinekt",
            },
            {
              label: "Docs",
              to: "/docs/intro",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Samuel Müller`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.shadesOfPurple,
    },
    colorMode: {
      disableSwitch: true,
      defaultMode: "dark",
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
