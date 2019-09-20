const { src, dest, parallel } = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');

const babel = require('gulp-babel');

const polyfill = require('@babel/polyfill');
const ptfo = require('@babel/plugin-transform-for-of');

const uglify = require('gulp-uglify');

const [pthDist, pthSrc] = [
  'dist/',
  'src/',
];

console.log('>>>', pthDist, pthSrc);
function css() {
  return src(`${pthSrc}/*.less`)
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(dest(pthDist));
}

function js() {
  return src(`${pthSrc}*.js`, { sourcemaps: false })
    .pipe(babel({
      presets: ['@babel/env'],
      plugins: [polyfill, ptfo],
    }))
    .pipe(uglify())
    .pipe(concat('index.js'))
    .pipe(dest(pthDist, { sourcemaps: false }));
}

exports.js = js;
exports.css = css;
exports.default = parallel(css, js);
