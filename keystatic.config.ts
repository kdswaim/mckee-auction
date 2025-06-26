import { config, fields, collection } from '@keystatic/core';
import { github } from '@keystatic/core/storage/github';

export default config({
  ui: {
    brand: {
      name: 'Ron McKee Auction Service',
    },
  },
  storage: github({
    repo: {
      owner: 'kdswaim',
      name: 'mckee-auction',
    },
    branch: 'main', // or your default branch
  }),
  collections: {
    posts: collection({
      label: 'Auctions',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Auction Date' }),
        time: fields.text({ label: 'Auction Time' }),
        location: fields.text({ label: 'Location' }),
        image: fields.url({
          label: 'Image URL',
          description: '(Optional) Upload your images to your portal (http://www.ronmckeeauctionservice.com/upload) and then paste the URL!',
        }),
        link: fields.url({ label: 'Link to full details', description: 'Optional link' }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});
