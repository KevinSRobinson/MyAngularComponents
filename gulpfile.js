var gulp = require('gulp');

//load the gulp config file
var config = require('./gulp.config.js')();

//tidying config
var myConfig = require('./gulp.config1.js')();

//used to allow the use of arguments with gulp commands
var args = require('yargs').argv;

//used to load any 'gulp-' plugins 
var $ = require('gulp-load-plugins')({ lazy: true });




var browserSync = require('browser-sync');
var wiredep = require('wiredep').stream;
var port = 7203;

gulp.task('default', ['components']);



///////////////////////////////////////
/// Code Quality
///////////////////////////////////////
////////////////////////////////
// Analyze code
gulp.task('vet', function(){
    
    log ('Analyzing Code');
    log (myConfig.appSourceFiles);
    return gulp

            //load all the source js files
            .src(myConfig.appSourceFiles)
            
            //print out files being Analyzed
            //use gulp-if & yargs to allow switching this
            .pipe($.if(args.verbose, $.print())) 

            //code linter
            .pipe($.jscs()) // check codestyling - config = .jscsrc
            .pipe($.jshint()) // check for code issues - config = .jshintrc

            //use a reporter for nicer output
            .pipe($.jshint.reporter('jshint-stylish'), {verbose: true})

            //fail if any there are any codind issues
            .pipe($.jshint.reporter('fail'));

});


///////////////////////////////////////








gulp.task('wiredep',  function(){

    logWireDepSettings();

    console.log(myConfig.clientFolderRoot);


    return gulp
            //use the client index.html file 
            .src(myConfig.clientIndexFile)
    
            //add the wiredep config using the options from config
            //uses the bower.json file to file the app dependencies
            .pipe(wiredep(myConfig.getWiredepDefaultOptions()))

            //inject the client js files
            .pipe($.inject(gulp.src(myConfig.componentSourceFiles)))

            //inject the client js files
            // .pipe($.inject(gulp.src(myConfig.examplesSourceFiles), {
            //     starttag: '<!-- inject:examples:js -->'
            // }))
            // //inject the css
            // .pipe($.inject(gulp.src(myConfig.compiledLess)))

            // the desination is the same location as the index.html file 
            .pipe(gulp.dest(myConfig.clientFolderRoot));
});
//////////////////////////////////////////////





////////////////////////////////
// Build



gulp.task('serve-dev', ['wiredep', 'template-cache'], function(){
   serve(true);
});



function serve(isDev){
   
    return $.nodemon(myConfig.nodeServerOptions(isDev))

        .on('restart', function(ev) {
            log('noode server restarted');            
            log(ev);
        })
        .on('start', function() {
            log('noode server started');
            startBrowserSync(isDev);
        })
        .on('crash', function() {
            log('noode server crashed');
        })
        .on('exit', function() {
           log('noode server exit');
        });
}



gulp.task('start-browsersync', function(){
    startBrowserSync(true);
});


////////////////////////////////
// Browser Sync
function  startBrowserSync(isDev){
    // if(args.nosync || browserSync.active){
    //     return;
    // }

    log('starting browser-sync');

    // if(isDev)
    // {
    //     gulp.watch([config.less], ['styles'])
    //         .on('change', function(event) { changeEvent(event); });
    // }
    // else {
    //      gulp.watch([config.less, config.js, config.html], ['optimize', browserSync.reload])
    //         .on('change', function(event) { changeEvent(event); });
    // }

    var options = {
            proxy: 'localhost:' + myConfig.nodeServerPort,
            port: myConfig.browserSyncPort,
            files:isDev ? [
                    config.allSourceFiles,
                    '!' + config.less,
                    config.temp + '**/*.css'
                ] : [],
           //injectChanges: true,
            logFileChanges: true,
            logLevel: 'debug',
            logPrefix: 'gulp-patterns',
            notify: true,
            reloadDelay: 0,
            
    };

    browserSync(options);    
} 




































//////////////////////////////////////////////
// optimize
//////////////////////////////////////////////
gulp.task('optimize', ['inject'], function(){

    log('Optimize the javascrtipt');
    
 
    //get assets for useref
    var assets = $.useref.assets({searchPath: './'});

    //template cachefolders
    var templateCache = config.temp + config.templateCache.file;
    var exampleTemplateCache = config.temp + config.examplesTemplateCache.file;

    //filters for minifiing
    var cssFilter = $.filter('**/*.css', { restore: true });
    var jsLibFilter = $.filter('**/' + config.optimized.lib, { restore: true });
    var jsAppFilter = $.filter('**/' + config.optimized.app, { restore: true });
    var jsExamplesFilter = $.filter('**/' + config.optimized.examples, { restore: true });

    return gulp
        //main index file src/index.html
        .src(config.index)
        .pipe($.debug())


        //template cache
        .pipe($.inject(gulp.src(templateCache, { read: false}), {
            starttag: '<!-- inject:templates:js -->'
        }))
        .pipe($.inject(gulp.src(exampleTemplateCache, { read: false}), {
            starttag: '<!-- inject:exampletemplates:js -->'
        }))


        // assets
        .pipe(assets)
        .pipe(assets.restore())
        .pipe($.useref())
       

         //js
         //minify vendor librarys 
        .pipe(jsLibFilter)
        .pipe($.uglify())
        .pipe(jsLibFilter.restore)


        //minify app librarys
        .pipe(jsAppFilter)
        .pipe($.ngAnnotate()) //di helper
        .pipe($.uglify())
        .pipe(jsAppFilter.restore)

        //minify examples librarys
        .pipe(jsExamplesFilter)
        .pipe($.ngAnnotate()) //di helper
        .pipe($.uglify())
        .pipe(jsExamplesFilter.restore)

        .pipe($.iife({
            useStrict: true,
            trimCode: true,
            prependSemicolon: false,
            bindThis: false,
        }))

        //copy files to destination
        .pipe(gulp.dest(config.dest));
});




gulp.task('bump', function(){

    var msg = 'Bumping Versions';
    var type = args.type;
    var version  = args.version;
    var options = {
        version: ''
    };

    if(version){
        options.version = version;
        msg += ' to ' + version;        
    }
    else{
        options.type = type;
        msg += ' fora a ' + type;
    }
    log(msg);
    return gulp
        .src(config.packages)
        .pipe($.print())
        .pipe($.bump(options))
        .pipe(gulp.dest(config.root));

});






////////////////////////////////
// Styles
gulp.task('styles', ['clean-styles'], function(){

    log('Compiling Less ->> Css');

    return gulp
                //loads the less file
                .src(myConfig.less)
                
                .pipe($.plumber())               
                
                //add less compiler
                .pipe($.less())

                //PostCSS plugin to parse CSS and add vendor prefixes to CSS rules
                // using values from Can I Use. It is recommended by Google 
                //and used in Twitter, and Taobao. https://github.com/postcss/autoprefixer
                .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))

                //write compiled files to temp folder
                .pipe(gulp.dest(myConfig.temp));

});



gulp.task('clean-styles', function () {

  return gulp
    .src(myConfig.compiledLess, {read: false})

    //clean using gulp-clean https://www.npmjs.com/package/gulp-clean
    .pipe($.clean());
});


/////////////////////////////////////////////////////////


gulp.task('less-watcher', function() {
    log('Watching ' + myConfig.less);
    gulp.watch([myConfig.less], ['styles']);
});


///////////////////////////////////////
/// templatecache
///////////////////////////////////////
gulp.task('template-cache', function() {

    log('Creating templatecache');
    log(config.srcTemplates);
    log(config.templateCache.file);
    log(config.templateCache.options);
    log(config.dest);

    return gulp.src(myConfig.componetTemplates)
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
    log(config.srcExampleTemplates);

    log(config.examplesTemplateCache.options.module);
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


gulp.task('watch-templates',  function() {
    log('Watching ' + config.srcTemplates);
    gulp.watch([config.srcTemplates], ['templatecache',  'optimize']);
});
gulp.task('watch-exampletemplates',  function() {
    log('Watching ' + config.srcExampleTemplates);
    gulp.watch([config.srcExampleTemplates], ['example-templates', 'optimize']);
});
///////////////////////////////////////















///////////////////////////////////////
/// functions
///////////////////////////////////////

function logWireDepSettings(){
    log('wiredep starting');
    log('using index.html file =' + myConfig.clientIndexFile);
    log('using source files =' + myConfig.appSourceFiles);
    log('using css file =' + myConfig.myConfig);
    log('Writing backto  =' + myConfig.sourceFolderRoot);
}



function changeEvent(event){
    var srcPattern = new RegExp('./.*(?=/' + config.source + ')/');

    log('file ' + event.path.replace(srcPattern, '') + ' ' + event.type);


}






function clean(path, done) {
    log('Cleaning: ' + $.util.colors.blue(path));
    del(path, done);
}
function del(path, done) {
  
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