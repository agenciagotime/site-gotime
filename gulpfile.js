const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const wait = require("gulp-wait");

//Compile sass
gulp.task("sass", function() {
  return gulp
    .src(["src/assets/sass/*.sass"])
    .pipe(wait(500))
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("src/assets/css"))
    .pipe(browserSync.stream());
});

//Build

//Watch and serve
gulp.task("serve", ["sass"], function() {
  browserSync.init({
    server: "./src"
  });

  gulp.watch(["src/assets/sass/*.sass"], ["sass"]);
  gulp.watch(["src/*.html"]).on("change", browserSync.reload);
});

gulp.task("default", ["sass", "serve"]);
