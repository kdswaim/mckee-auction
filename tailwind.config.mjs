import { join } from 'path';
import { fileURLToPath } from 'url';

// Required for resolving paths in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

export default {
  content: [
    join(__dirname, 'index.html'),
    join(__dirname, 'src/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'node_modules/taos/**/*.js')
  ],
  safelist: [
    {
      pattern: /taos:.*/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
