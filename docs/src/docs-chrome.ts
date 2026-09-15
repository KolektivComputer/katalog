import { defineDocsChrome } from '@kolektiv/common-docs-chrome';

export const docs = defineDocsChrome({
  name: 'Katalog',
  title: 'Katalog Docs',
  description:
    'Pick archetypes from a catalog. Name, license, targets, and flags in. Our standards and libraries out.',
  siteUrl: 'https://katalog.kolektiv.computer',
  base: '/',
  nav: [
    {
      label: 'Getting started',
      items: [{ label: 'Overview', href: '/docs/', description: 'What Katalog is' }],
    },
    {
      label: 'Project',
      items: [
        {
          label: 'GitHub',
          href: 'https://github.com/KolektivComputer/katalog',
          external: true,
          description: 'Source repository',
        },
      ],
    },
  ],
  repo: {
    url: 'https://github.com/KolektivComputer/katalog',
    branch: 'main',
  },
  footer: {
    tagline: 'A Kolektiv Computing project.',
    links: [
      { label: 'GitHub', href: 'https://github.com/KolektivComputer/katalog' },
      { label: 'Kolektiv', href: 'https://kolektiv.computer' },
    ],
  },
  builtBy: { href: 'https://kolektiv.computer' },
});
