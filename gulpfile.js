var gulp = require("gulp");
var webpack = require("gulp-webpack");
var templateCache = require("gulp-angular-templatecache");


gulp.task("default", ["components", "html", "watch-templates"]);


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