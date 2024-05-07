import {themes} from 'prism-react-renderer';

const code_themes = {
  light: themes.github,
  dark: themes.dracula,
};

  /** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: true,
  editUrl: ({ versionDocsDirPath, docPath}) => {
    return `https://github.com/AOT-Technologies/formsflow-ai-doc.git/edit/master/${versionDocsDirPath}/${docPath}`;
  },
  showLastUpdateTime: true,
  sidebarCollapsible: true,
  sidebarPath: require.resolve('./sidebars-default.js'),
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Formsflow.ai Docs',
  tagline: 'Formsflow.ai Documentation',
  favicon: 'img/favicon.ico',
  url: 'https://AOT-Technologies.github.io',
  baseUrl: '/',
  organizationName: 'Aot-Technologies',
  projectName: 'formsflow-ai-doc', 
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/docs',
          ...defaultSettings,
        },
        blog:false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      navbar: {
        title: 'Formsflow.ai',
        logo: {
          alt: 'formsflow.ai Logo',
          src: 'img/logo.png',
        },

        items: [
          {
            label: 'Docs',
            to: '/docs/intro',
            className: 'guides-top-header',
          },
          // {
            
          //     type: 'docsVersion',
          //     position: 'right',
          // this is version listing part
          // },
          {
            href: 'https://github.com/AOT-Technologies/forms-flow-ai',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discussions',
                href: 'https://github.com/AOT-Technologies/forms-flow-ai/discussions',
              },
              
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/AOT-Technologies/forms-flow-ai',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} formsflow.ai.`,
      },
      prism: {
        ...code_themes
      },
    }),
};

export default config;
