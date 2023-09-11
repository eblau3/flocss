const path = require('path');
const glob = require('glob')

module.exports = {
  mode: 'production',
  entry: glob.sync('./src/js/*.js', {dotRelative:true}),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/assets/js')
  }
};

// es6 var
//import path from 'path';
//import { globSync }  from 'glob';
//
//const dirname = path.dirname(new URL(import.meta.url).pathname);
//const entries = './' + globSync('src/js/*.js');
//
//export default {
//  mode: 'production',
//  entry: entries,
//  output: {
//    filename: 'bundle.js',
//    path: path.resolve(dirname, 'dist/assets/js'),
//  },
//};