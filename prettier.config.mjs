/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
