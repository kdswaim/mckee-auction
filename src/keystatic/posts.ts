import { getCollection } from 'keystatic/core';

export const getAllEntries = async () => {
  return await getCollection('posts');
};
