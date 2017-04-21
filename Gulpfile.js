var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');
var browserSync = require('browser-sync').create();

gulp.task('bootstrap-sass',function(){
    return gulp.src([
        'bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss',
        'bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_mixins.scss',
        'bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_normalize.scss',
        'bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_print.scss',
        'bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_glyphicons.scss',
        'bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_scaffolding.scss',
        'bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_type.scss',
        'bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_code.scss',
        'bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_grid.scss',
        'bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_tables.scss',
        'bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_forms.scss',
        'bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_buttons.scss',
        'bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_utilities.scss',
        'bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_responsive-utilities.scss'

    ]).pipe(gulp.dest('./app/assets/styles/sass/bootstrap'));
});

gulp.task('bootstrap-sass-mixins',function(){
    return gulp.src([
        'bower_components/bootstrap-sass/assets/stylesheets/bootstrap/mixins/*.scss',
    ]).pipe(gulp.dest('./app/assets/styles/sass/bootstrap/mixins'));
});

gulp.task('angular-socialshare',function(){
    return gulp.src([
        'bower_components/angular-socialshare/angular-socialshare.js',
    ]).pipe(gulp.dest('./app/assets/scripts/vendor'));
});

gulp.task('font-awesome',function(){
    return gulp.src([
        'bower_components/font-awesome/scss/*.scss',
    ]).pipe(gulp.dest('./app/assets/styles/sass/font-awesome'));
});

gulp.task('font-awesome-fonts',function(){
    return gulp.src([
        'bower_components/font-awesome/fonts/*',
    ]).pipe(gulp.dest('./app/assets/styles/fonts'));
});

gulp.task('jshint', function () {
    gulp.src([
        './app/app.js',
        './app/services/*.js',
        './app/controllers/*.js',
        './app/directives/*.js',
        '!./app/*min.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('compile', function () {
    return gulp.src([ 
        './app/app.js',
        './app/services/*.js',
        './app/controllers/*.js',
        './app/directives/*.js',
        '!./app/*min.js'
    ])
    .pipe(concat('app.min.js'))
    .pipe(uglify({ mangle: false }))
    .pipe(gulp.dest('./app/'))
});

gulp.task('sass', function () {
  return gulp.src(['./app/assets/styles/sass/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed', noCache: true}).on('error', sass.logError))
    .pipe(gulp.dest('./app/assets/styles/css'));
});

gulp.task('watch', ['bootstrap-sass','bootstrap-sass-mixins','font-awesome','font-awesome-fonts','angular-socialshare','sass','jshint','compile'], function () {

    gulp.watch([
        './app/assets/styles/sass/**/*.scss'
    ],['sass']);
   
    gulp.watch([
        './app/app.js',
        './app/services/*.js',
        './app/controllers/*.js',
        './app/directives/*.js',
        '!./app/*min.js'
    ],['compile','jshint']);

    gulp.watch(['./app/**/*.html']);


});

gulp.task( 'default', [ 'watch' ] );

