
const browserify = require('browserify');
const b = browserify('index.es6.js', {debug: true, standalone: "default"});
b.transform('uglifyify', {
    global: true,
    keep_fnames: true,
    mangle: {
    //keep_classnames: true,
        reserved: ['ByteLengthQueuingStrategy', 'CountQueuingStrategy']
    }
}).transform('babelify', {
    plugins: ['babel-plugin-unassert']
}).bundle().pipe(process.stdout);
