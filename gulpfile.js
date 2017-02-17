var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('clean', function() {
    return del(['build']);
});

gulp.task('webserver', function(){
    connect.server({
        root: 'src/client',
        livereload: true
    });
});