module.exports = function(){

    //temp location for compiled css
    var temp = './.tmp/';

    //base app source folder
    var sourceFolderRoot = './src/';

    //app module paths
    var componetsSource = sourceFolderRoot + 'Components/**/*.js';
    var examplesSource = sourceFolderRoot + 'Examples/**/*.js';

    //bower
    var bowerFilesPath = './bower_components/';
    var bowerJsonFile = './bower.json';

 
    var config = {


        /**********************************/
        /**  Files Paths */
        temp: temp,
        sourceFolderRoot: sourceFolderRoot,

        // source file paths
        appSourceFiles: [ componetsSource,  examplesSource ],

        //less config
        less: sourceFolderRoot + 'styles/styles.less', 
        compiledLess: temp + 'styles.css',

        //main index.html file
        clientIndexFile: sourceFolderRoot + 'index.html',

    };

    // wiredef config settings
    config.getWiredepDefaultOptions = function(){
        return {
            //location of the bower.json file
            bowerJson: bowerJsonFile,

            //location of bower_components
            directory: bowerFilesPath,

            //list of files to ignore wiredep process
            ignorePath: '../..'
        };
    };

    return config;
};

