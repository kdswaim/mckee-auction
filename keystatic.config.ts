// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';


export default config({
  ui: {
    brand: { name: 'Ron Mckee Auction Service',
    },
  },
  storage: {
    kind: 'github',
    repo: {
      owner: 'kdswaim',
      name: 'mckee-auction'
    }
  },
  collections: {
    posts: collection({
      label: 'Auctions',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Auction Date' }),
        time: fields.text({
            label: 'Auction Time',
          }),
        location: fields.text({ label: 'Location' }),
        image: fields.url({ label: 'Image URL', description: '(Optional) Upload your images to your portal (http://www.ronmckeeauctionservice.com/upload) and then paste the URL!' }),
        link: fields.url({ label: 'Link to full details', description: 'Optional link' }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});