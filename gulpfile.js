var gulp = require('gulp'),
    gulpConcat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),

    jsFiles = [
        'bower_components/css-element-queries/src/ResizeSensor.js',
        'bower_components/waypoints/lib/jquery.waypoints.js',
        'src/*.js'
    ];

gulp.task('default', ['prepare-dist']);

gulp.task('prepare-dist', ['concat', 'minify']);

gulp.task('concat', function() {
    return gulp.src(jsFiles)
        .pipe(gulpConcat('ad-refresher.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('minify', function() {
    return gulp.src(jsFiles)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(gulpConcat('ad-refresher.min.js'))
        .pipe(sourcemaps.write('./', {
            sourceMappingURLPrefix: ''
        }))
        .pipe(gulp.dest('dist'));
});
