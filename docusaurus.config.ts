import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'RaspiKidd Learning Hub',
  tagline: 'Explore fun, interactive STEM activities, resources, and tutorials to spark creativity and innovation.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://raspikiddlearn.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RaspiKidd', // Usually your GitHub org/user name.
  projectName: 'Learn', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        /*blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/RaspiKidd/Learn',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },*/
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    //image: 'img/docusaurus-social-card.jpg',
    navbar: {
      //title: 'RaspiKidd',
      logo: {
        alt: 'RaspiKidd Logo',
        src: 'img/RaspiKidd.svg',
        href: 'https://raspikidd.com',
      },
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/microbit', label: 'micro:bit', position: 'left'},
        /*{
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },*/
        //{to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/RaspiKidd',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        /*{
          title: 'Projects',
          items: [
            {
              label: 'MakeCode',
              to: '/docs/MakeCode-Projects',
            },
          ],
        },*/
        {
          title: 'Community',
          items: [
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@raspikidd',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/kerry-kidd/',
            },
            {
              label: 'BlueSky',
              href: 'https://bsky.app/profile/raspikidd.bsky.social',
            },
            {
              label: 'X',
              href: 'https://x.com/RaspiKidd',
            },
          ],
        },
        /*{
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/RaspiKidd',
            },
          ],
        }, */
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RaspiKidd`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
