var gulp = require("gulp");
var webpack = require("gulp-webpack");
var templateCache = require("gulp-angular-templatecache");
var sass = require('gulp-sass');

//gulp.task("default", ["components", "html", "watch-templates", "sassbuild"]);
// default task

gulp.task("components", function() {
    return gulp.src("./entry.js")
        .pipe(webpack( require("./webpack.config.js") ))
        .pipe(gulp.dest("./dist/"));
});




var config = {
    srcTemplates:[
        './src/Components/**/**/**/**/**/*.html'
    ],
    base: function(file) {
        return  file.path.replace(/^.*(\\|\/|\:)/, '');
    },
    standalone: false,
    destPartials: 'dist/',
    module: "myComponents"
};


gulp.task("watch-templates", function() {
    gulp.watch('src/Components/**/**/**/*.html', ['html']);
});

gulp.task('html', function() {
    return gulp.src(config.srcTemplates)
        .pipe(templateCache('templateCache.js', config))
        .pipe(gulp.dest(config.destPartials));
});
/* gulpfile.js */
var 
    gulp = require('gulp'),
    sass = require('gulp-sass');

// source and distribution folder
var
    source = './src/',
    dest = './dist/';

// Bootstrap scss source
var bootstrapSass = {
        in: './node-modules/bootstrap-sass/assets/'
    };
    
// fonts
var fonts = {
        in: [source + 'fonts/*.*', bootstrapSass.in + 'assets/fonts/**/*'],
        out: dest + 'fonts/'
    };

// css source file: .scss files
var css = {
    in: './src/css/main.scss',
    out: dest + 'css/',
    watch: source + 'css/**/*',
    sassOpts: {
        outputStyle: 'nested',
        precison: 3,
        errLogToConsole: true,
        includePaths: [bootstrapSass.in + 'assets/stylesheets']
    }
};

// copy bootstrap required fonts to dest
gulp.task('fonts', function () {
    return gulp
        .src(fonts.in)
        .pipe(gulp.dest(fonts.out));
});

// copy bootstrap required fonts to dest
gulp.task('fonts', function () {
    return gulp
        .src(fonts.in)
        .pipe(gulp.dest(fonts.out));
});

// compile scss
gulp.task('sass', ['fonts'], function () {
    return gulp.src(css.in)
        .pipe(sass(css.sassOpts))
        .pipe(gulp.dest(css.out));
});

// default task
gulp.task('default', ['sass'], function () {
     gulp.watch(css.watch, ['sass']);
});