var gulp = require('gulp');
var connect = require('gulp-connect');
// Include Gulp
var gulp = require('gulp');

// Include plugins
var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
    replaceString: /\bgulp[\-.]/
});

// Define default destination folder
var dest = 'build';

gulp.task('bowerjs', function() {
    gulp.src(plugins.mainBowerFiles({
        paths: {
            bowerDirectory: './src/client/bower_components',
            bowerJson: './src/client/bower.json'
        }
    }))
        .pipe(plugins.filter('*.js'))
    .pipe(plugins.concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('bowercss', function() {
    gulp.src(plugins.mainBowerFiles({
        paths: {
            bowerDirectory: './src/client/bower_components',
            bowerJson: './src/client/bower.json'
        }
    }))
        .pipe(plugins.filter('*.css'))
        .pipe(plugins.concat('main.css'))
        .pipe(plugins.uglify())
        .pipe(gulp.dest('dist/css'));

});

gulp.task('html', function(){
    gulp.src('src/client/**/*.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('clean', function(){
   gulp.src('dist')
       .pipe(plugins.clean())
});

gulp.task('modules', function(){
    gulp.src(['src/client/app/modules/**/*.js', 'src/client/app/**/*.js'])
        .pipe(plugins.concat('modules.js'))
        .pipe(plugins.uglify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('build', function(){
    return gulp.src(['src/client/app/*', 'src/client/bower_components/**/*.js', 'src/client/index.html'])
        .pipe(gulp.dest('dist/client'))
});

gulp.task('webserver', function(){
    connect.server({
        root: 'src/client',
        livereload: true
    });
});