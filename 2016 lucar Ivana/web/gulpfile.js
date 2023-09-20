'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const pxtorem = require('gulp-pxtorem')
const rename = require('gulp-rename')

function buildStyles() {
  return gulp
    .src(['./sass/**/*.scss', './scss/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(rename({ suffix: '.map' })) // rename base.map.css
    .pipe(gulp.dest('./css')) // regular CSS + map
    .pipe(
      pxtorem({
        root_value: 16,
        unit_precision: 5,
        prop_white_list: [],
        replace: false,
        media_query: false,
      })
    )
    .pipe(autoprefixer('last 2 version', 'ie >= 11'))
    .pipe(
      cleanCSS({
        level: {
          1: {
            // removeQuotes: false,
            // variableValueOptimizers: ["color"]
          },
          2: {
            // all: true
          },
        },
      })
    )
    .pipe(rename({ basename: 'base' })) // rename base.css
    .pipe(gulp.dest('./css')) // production, minified CSS
}

exports.buildStyles = buildStyles
exports.watch = function () {
  gulp.watch('./sass/**/*.scss', ['sass'])
}
