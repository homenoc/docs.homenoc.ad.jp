import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Home NOC Operators' Group Docs",
  tagline: 'A documentation site for the Home NOC Operators\' Group',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.homenoc.ad.jp',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'homenoc', // Usually your GitHub org/user name.
  projectName: 'docs.homenoc.ad.jp', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    }
  },
  themes: ['@docusaurus/theme-mermaid'],
  clientModules: [require.resolve('./src/mermaid-icons.js')],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/homenoc/docs.homenoc.ad.jp/tree/main/',
          sidebarCollapsed: false,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.png',
    navbar: {
      title: 'Home NOC Operators\' Group Docs',
      logo: {
        alt: 'AS59105 Logo',
        src: 'img/logo.png',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Docs',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Web',
              href: 'https://www.homenoc.ad.jp/',
            },
            {
              label: 'Community Slack',
              href: 'https://www.homenoc.ad.jp/blog/community/2022/01/23/CommunitySlack.html',
            },
            {
              label: 'X',
              href: 'https://x.com/AS59105',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/AS59105/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/homenoc/',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Home NOC Operators' Group`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: false,
      },
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
