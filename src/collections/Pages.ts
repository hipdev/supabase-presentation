import type { CollectionConfig } from 'payload/types';

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'pageName',
      type: 'text',
      label: 'Page Name',
      required: true
    },
    {
      name: 'layout',
      type: 'blocks',
      label: 'Layout',
      blocks: []
    }
  ]
};
