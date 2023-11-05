const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');
const sortMediaQueries = require('postcss-sort-media-queries');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    purgecss({
      content: ['dist/**/*'],
      defaultExtractor: content => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
        return broadMatches
      }
    }),
    autoprefixer(),
    sortMediaQueries({sort:'desktop-first'}),
    cssnano({preset: 'default'})
  ]
};