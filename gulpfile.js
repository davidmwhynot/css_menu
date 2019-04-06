// imports
const gulp = require("gulp");

const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

// config
const AUTOPREFIXER_BROWSERS = ["> 1%", "last 2 versions"];

// sass
gulp.task("sass", () => {
  return gulp
    .src("./src/sass/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest("./dist/css"));
});

// html
gulp.task("html", () => {
  return gulp.src("./src/index.html").pipe(gulp.dest("./dist"));
});

// default
gulp.task(
  "default",
  gulp.series(gulp.parallel("sass", "html"), () => {
    gulp.watch("./src/index.html", gulp.series("html"));
    gulp.watch("./src/sass/**/*", gulp.series("sass"));
  })
);
