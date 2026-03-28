// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import mermaid from 'astro-mermaid';
import starlightThemeFlexoki from 'starlight-theme-flexoki';
import { fileURLToPath } from 'node:url';

const componentsDir = fileURLToPath(new URL('./src/components', import.meta.url));

export default defineConfig({
  site: 'https://cadence.ifelse.one',
  vite: {
    resolve: {
      alias: {
        '@components': componentsDir,
      },
    },
  },
  /* One source path per redirect — avoid `/path` and `/path/` duplicates (Astro route collision). */
  redirects: {
    '/what-is-cadence': '/concepts/what-is-cadence/',
    '/how-it-works': '/concepts/how-it-works/',
    '/security-and-access': '/concepts/security-and-access/',
    '/glossary': '/reference/glossary/',
    '/operations/api-keys': '/guides/api-keys/',
    '/operations/configuration': '/guides/configuration/',
    '/operations/monitoring': '/guides/monitoring/',
    '/operations/oauth2-clients': '/guides/oauth2-clients/',
    '/operations/platform-admin': '/guides/platform-admin/',
    '/meta/regenerating-reference': '/',
    '/reference/overview': '/reference/glossary/',
    '/contributing/regenerating-reference': '/',
    '/features/orchestrator-instances/': '/features/ai-apps/',
    '/features/hot-reload-orchestrator-pool/': '/features/hot-reload-ai-app-pool/',
    '/llm.txt': '/llms.txt',
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mermaid({ autoTheme: true }),
    starlight({
      plugins: [starlightThemeFlexoki({ accentColor: 'blue' })],
      favicon: 'favicon.ico',
      title: 'Cadence AI Orchestration Platform',
      tagline: 'Multi-tenant AI Apps and agent platform',
      description: 'Documentation for Cadence — multi-tenant AI Apps and agent platform.',
      customCss: ['./src/styles/tailwind.css', './src/styles/layout.css'],
      components: {
        PageTitle: './src/components/PageTitle.astro',
        MarkdownContent: './src/components/MarkdownContent.astro',
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      sidebar: [
        {
          label: 'Introduction',
          items: [
            { label: 'Welcome', link: '/', badge: { text: 'Start here', variant: 'success' } },
          ],
        },
        {
          label: 'Concepts',
          autogenerate: { directory: 'concepts' },
        },
        {
          label: 'Features',
          autogenerate: { directory: 'features' },
        },
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Integrations',
          autogenerate: { directory: 'integrations' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
