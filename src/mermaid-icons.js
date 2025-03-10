import mermaid from 'mermaid';
import { icons as logos } from '@iconify-json/logos';
import { icons as clarity } from '@iconify-json/clarity';

mermaid.registerIconPacks([
  {
    name: logos.prefix,
    icons: logos,
  },
  // https://icones.js.org/collection/clarity
  {
    name: clarity.prefix,
    icons: clarity,
  }
]);