import { defineDocsChrome } from '@kolektiv/common-docs-chrome';

export const docs = defineDocsChrome({
  product: 'Katalog',
  siteUrl: 'https://katalog.kolektiv.computer',
  base: '/',
  nav: [
    { label: 'Getting started', href: '/docs/' },
  ],
});
