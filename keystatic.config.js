import { defineCollection } from '@keystatic/core';

export const collections = {
  blog: defineCollection({
    schema: {
      title: 'string',
      content: 'markdown',
    },
  }),
};
