const gulp = require('gulp')
const babel = require('gulp-babel')
const watch = require('gulp-watch')
const plumber = require('gulp-plumber')
const pump = require('pump')
const postcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')


const style = 'static/css/app.css'
const buildDir = 'static/css/build/'

gulp.task('css', (cb) => {
		return watch(style, () => {
			gulp.src(style)
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(postcss([ require('precss'), require('autoprefixer'), require('lost')]))
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest(buildDir));
	})
})
