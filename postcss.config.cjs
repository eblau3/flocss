const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    purgecss({
      content: ['dist/**/*.html'],
      defaultExtractor: content => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
        return broadMatches
      }
    }),
    autoprefixer(),
    mqpacker(),
    cssnano({preset: 'default'})
  ]
};