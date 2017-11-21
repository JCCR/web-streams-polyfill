require('browserify')('index.es6.js', {
  debug: true,
  standalone: 'default',
}).transform('uglifyify', {
  global: true,
  keep_fnames: true,
  mangle: {
    reserved: ['ByteLengthQueuingStrategy', 'CountQueuingStrategy'],
  },
}).transform('babelify', {
  plugins: ['babel-plugin-unassert'],
}).bundle().pipe(process.stdout);
