var gulp = require('gulp');
var webpack = require('gulp-webpack');
var config = require('./gulp.config.js')();
var templateCache = require('gulp-angular-templatecache');
var gulpCopy = require('gulp-copy');
var args = require('yargs').argv;
var $ = require('gulp-load-plugins')({
    lazy: true
});
var webpack = require('webpack-stream');
var server = require('gulp-server-livereload');
var browserSync = require('browser-sync');
var watch = require('gulp-watch');
var wiredep = require('wiredep').stream;


gulp.task('default', ['components']);



///////////////////////////////////////
/// Code Quality
///////////////////////////////////////
gulp.task('vet', function() {
    log('Analyzing source with jsHint and JSCS');

    gulp.src('./src/Components/**/**/*.js')
        .pipe($.plumber())
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {
                verbose: true
            })

        );
});
///////////////////////////////////////





gulp.task('watch',   ['components'], function() {
    gulp.watch('dist/*.*', ['components']);
});

gulp.task('components', function() {
    return gulp.src('./componentsEntry.js')
        .pipe(webpack(require('./conmponentsWebpack.config.js')))
        .pipe(gulp.dest('dist/'));
});
gulp.task('vendor', function() {
    return gulp.src('./vendorWebpack.config.js')
        .pipe(webpack(require('./vendorWebpack.config.js')))
        .pipe(gulp.dest('dist/'));
});






// Copy dist Contents to Example folder
gulp.task('copy-to-examples', function() {
    return gulp.src('./dist/*.*')
        .pipe(gulp.dest('./Examples/dist/'));

});


///////////////////////////////////////
/// Server
///////////////////////////////////////
gulp.task('webserver', function() {
    gulp.src('./Examples/')
        .pipe(server({
            livereload: true,
            directoryListing: true,
            open: true,
            defaultFile: 'index.html'
        }));
});



//////////////////////////////////////////////
// Injects
//////////////////////////////////////////////
gulp.task('inject',  function(){

    log('inject starting');
    log('index : ' + config.index);
    log('client : ' + config.client);
    log('css : ' + config.css);

    return gulp
            .src(config.index)
            ///.pipe($.inject(gulp.src(config.css)))
            .pipe(gulp.dest(config.client));
});


gulp.task('wiredep',  function(){

    log('wiredep starting');
    log('index : ' + config.index );
    log('js : ' + config.js );
    var options = config.getWiredepDefaultOptions();

    return gulp
            .src(config.index)
            .pipe(wiredep(options))
            .pipe($.inject(gulp.src(config.js)))
            .pipe($.inject(gulp.src(config.examples)))
            .pipe(gulp.dest(config.client));
});
//////////////////////////////////////////////






//////////////////////////////////////////////
// optimize
//////////////////////////////////////////////
gulp.task('optimize', ['inject'], function(){

    log('Optimize the javascrtipt');
    
    log(config.index);

    var assets = $.useref.assets({searchPath: './'});
    var templateCache = config.temp + config.templateCache.file;
    var exampleTemplateCache = config.temp + config.examplesTemplateCache.file;

    return gulp
        .src(config.index)
        .pipe($.debug())
        .pipe($.inject(gulp.src(templateCache, { read: false}), {
            starttag: '<!-- inject:templates:js -->'
        }))
         .pipe($.inject(gulp.src(templateCache, { read: false}), {
            starttag: '<!-- inject:exampletemplates:js -->'
        }))
        .pipe(assets)
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe(gulp.dest(config.dest));
});








///////////////////////////////////////
///Styles
///////////////////////////////////////
gulp.task('styles', function() {
    log('Compiling Less ->> Css from =' + config.less);

    return gulp
        .src(config.less)
        .pipe($.plumber())
        .pipe($.less())
        .on('error', errorLogger)
        .pipe($.autoprefixer({
            browsers: ['last 2 version', '> 5%']
        }))
        .pipe(gulp.dest(config.dest));

});

gulp.task('less-watcher', function() {
    log('Watching ' + config.less);
    gulp.watch([config.less], ['styles']);
});


///////////////////////////////////////
/// templatecache
///////////////////////////////////////
gulp.task('templatecache', function() {

    log('Creating templatecache');
    log(config.srcTemplates);
    log(config.templateCache.file);
    log(config.templateCache.options);
    log(config.dest);

    return gulp.src(config.srcTemplates)
        .pipe($.debug())
        .pipe($.minifyHtml({
            empty: true
        }))
        .pipe($.debug())
        .pipe(
            $.angularTemplatecache(
                config.templateCache.file,
                config.templateCache.options
            ))
        .pipe($.debug())
        .pipe(gulp.dest(config.temp));
});

gulp.task('example-templates', function() {

    log('Creating examples templatecache');
    log(config.examplesTemplateCache);
    log(config.examplesTemplateCache.file);
    log(config.examplesTemplateCache.options);
    log(config.dest);

    return gulp.src(config.srcExampleTemplates)
        .pipe($.debug())
        .pipe($.minifyHtml({
            empty: true
        }))
        .pipe($.debug())
        .pipe(
            $.angularTemplatecache(
                config.examplesTemplateCache.file,
                config.examplesTemplateCache.options
            ))
        .pipe($.debug())
        .pipe(gulp.dest(config.temp));
});


gulp.task('watch-templates', ['templatecache'], function() {
    log('Watching ' + config.srcTemplates);
    gulp.watch([config.srcTemplates], ['templatecache', 'copy-to-examples']);
});

///////////////////////////////////////







gulp.task('serve-dev', function() {
    var isDev = true;

    var nodeOptions = {
        script: config.nodeServer,
        delayTime: 1,
        env: {
            'PORT': config.defaultPort,
            'NODE_ENV': isDev ? 'dev' : 'build'
        },
        watch: [config.server]
    };

    log(config.nodeServer);

    return $.nodemon(nodeOptions)
        .on('restart', function(ev) {
            log('noode server restarted');
            log(ev);

            // setTimeout(function() {
            //     browserSync.notify('reloading now ...');
            //     browserSync.reload({
            //         stream: false
            //     });
            // }, config.browserReloadDelay);
        })
        .on('start', function() {
            log('noode server started');
            //startBrowserSync();
        })
        .on('crash', function() {
            log('noode server crashed');
        })
        .on('exit', function() {
            log('noode server exit');
        });

});





///////////////////////////////////////
/// Clean Tasks
///////////////////////////////////////
gulp.task('clean-styles', function(done) {
    var files = config.temp + '**/*.css';
    clean(files, done);
});



///////////////////////////////////////






///////////////////////////////////////
/// functions
///////////////////////////////////////
function changeEvent(event){
    var srcPattern = new RegExp('./.*(?=/' + config.source + ')/');

    log('file ' + event.path.replace(srcPattern, '') + ' ' + event.type);


}

function startBrowserSync() {
    if (args.nosync || browserSync.active) {
        return;
    }

    log('starting browser-sync');

    gulp.watch([config.less], ['styles'])
        .on('change', function(event) {
            changeEvent(event);
        });

    var options = {
        proxy: 'localhost:' + port,
        port: 4000,
        files: [
            config.client + '**/*.*',
            '!' + config.less,
            config.temp + '**/*.css'
        ],

        ghostMode: {
            clicks: true,
            location: false,
            forms: true,
            scroll: true
        },
        injectChangees: true,
        logFileChanges: true,
        logLevel: 'debug',
        logPrefix: 'gulp-patterns',
        notify: true,
        reloadDelay: 0

    };

    browserSync(options);
}







//functions
function clean(path, done) {
    log('Cleaning: ' + $.util.colors.blue(path));
    del(path, done);
}

function errorLogger(error) {
    log(' *** Start of Error ***');
    log(error);
    log(' *** Start of Error ***');
    this.emit('end');}

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.red(msg));
    }
}