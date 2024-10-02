const path = require('path');
const glob = require('glob')

module.exports = {
  mode: 'production',
  entry: glob.sync('./src/js/**/*.js', {dotRelative:true}),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/assets/js')
  }
};