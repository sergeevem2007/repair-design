const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

function bs() {
  serveSass();
  mincss();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./css/style.css", mincss).on('change', browserSync.reload);
  watch("./js/*.js").on('change', browserSync.reload);
};

  function serveSass() {
    return src("./sass/*.sass")
      .pipe(sass())
      .pipe(dest("./css"))
      .pipe(browserSync.stream());
  };
  
  function mincss() {
    return src("./css/style.css")  
      .pipe(rename({suffix: ".min", extname: ".css"}))
      .pipe(cleanCSS())  
      .pipe(dest("./css"))
      .pipe(browserSync.stream());  
  };

  function serveSass() {
    return src("./sass/*.sass")
      .pipe(sass())
      .pipe(dest("./css"))
      .pipe(browserSync.stream());  
  };

exports.serve = bs;