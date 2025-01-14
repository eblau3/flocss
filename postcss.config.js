const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');
const sortMediaQueries = require('postcss-sort-media-queries');
const cssnano = require('cssnano');
const postcssPxtorem = require('postcss-pxtorem');

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
    cssnano({preset: 'default'}),
    postcssPxtorem({
      rootValue: 16,
      propList: ['*'],
      unitPrecision: 4,
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    })
  ]
};