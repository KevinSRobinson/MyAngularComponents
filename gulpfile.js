var gulp = require('gulp');
var webpack = require('gulp-webpack');
var config = require('./gulp.config.js')();
var templateCache = require('gulp-angular-templatecache');
var gulpCopy = require('gulp-copy');
var args = require('yargs').argv;
var $ = require('gulp-load-plugins')({lazy : true});
var webpack = require('webpack-stream');
var server = require('gulp-server-livereload');
var browserSync = require('browser-sync');
var watch = require('gulp-watch');

gulp.task('default', ['components']);


gulp.task('vet', function(){
    log('Analyzing source with jsHint and JSCS');
    

   gulp.src('./src/Components/**/**/*.js')
    .pipe($.plumber())
    .pipe($.if(args.verbose, $.print()))
    .pipe($.jscs())
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish', {verbose: true})
    
    );
    
    
});


gulp.task('components', function() {
   return gulp.src('./webpack/componentsEntry.js')
    .pipe(webpack( require('./webpack/conmponentsWebpack.config.js') ))
    .pipe(gulp.dest('dist/'));                     
});


gulp.task('vendor', function() {
  return gulp.src('webpack/vendorWebpack.config.js')
   .pipe(webpack( require('./webpack/vendorWebpack.config.js') ))
    .pipe(gulp.dest('dist/'));      
});






// Copy dist Contents to Example folder
gulp.task('examplesdev', ['html', 'components'], function(){
    return gulp.src('./dist/*.*')
          .pipe(gulp.dest('./Examples/dist/'));
          
});




gulp.task('webserver', function() {
  gulp.src('./Examples/')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true,
      defaultFile: "index.html"
    }));
});


///Styles
gulp.task('styles',  function(){
    log('Compiling Less ->> Css from =' + config.less );

    return gulp
                .src(config.less)
                .pipe($.plumber())
                .pipe($.less())
                .on('error',  errorLogger)
                .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
                .pipe(gulp.dest(config.dest));

});
gulp.task('clean-styles', function(done){
    var files = config.temp + '**/*.css';
    clean(files, done);    
});
gulp.task('less-watcher', function(){
    log('Watching ' + config.less);
    gulp.watch([config.less], ['styles']);
});


// html Templates
gulp.task('templatecache', function(){

    log('Creating templatecache');
    log(config.srcTemplates);
    log(config.templateCache.file);
    log(config.templateCache.options);
    log(config.dest);

    return gulp.src(config.srcTemplates)
            .pipe($.debug())
            .pipe($.minifyHtml({empty: true}))
            .pipe($.debug())
            .pipe(
            $.angularTemplatecache(
                config.templateCache.file,
                config.templateCache.options
            ))      
            .pipe($.debug())       
            .pipe(gulp.dest(config.dest));
          

});

gulp.task('watch-templates', function(){
    log('Watching ' + config.srcTemplates);
       gulp.watch([config.srcTemplates], ['templatecache']);
});




gulp.task('serve-dev', function(){
    var isDev= true;

    var nodeOptions = {
        script: config.nodeServer,
        delayTime: 1,
        env: {
            'PORT': config.defaultPort,
            'NODE_ENV': isDev ? 'dev' : 'build'
        },
        watch: [config.server]
    };

    return $.nodemon(nodeOptions)
        .on('restart', function(ev) {
            log('noode server restarted');            
            log(ev);

            setTimeout(function(){
                browserSync.notify('reloading now ...');
                browserSync.reload({stream: false});
            }, config.browserReloadDelay);
        })
        .on('start', function() {
            log('noode server started');
            startBrowserSync();
        })
        .on('crash', function() {
            log('noode server crashed');
        })
        .on('exit', function() {
           log('noode server exit');
        });

});











//functions
function clean(path, done){
    log('Cleaning: ' + $.util.colors.blue(path));
    del(path, done);
}
function errorLogger(error){
    log(' *** Start of Error ***' );
    log(error);
    log(' *** Start of Error ***' );
    this.emit('end');
}

function log(msg){
    if(typeof(msg) === 'object'){
        for (var item in msg){
            if(msg.hasOwnProperty(item)){
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    }
    else{
        $.util.log($.util.colors.red(msg));
    }
}