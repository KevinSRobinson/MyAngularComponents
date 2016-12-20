module.exports = function(){

    //temp location for compiled css
    var temp = './.tmp/';

    //base app source folder
    
    var clientFolderRoot = './src/Client/';

    //app module paths
    var componetsSource = clientFolderRoot + 'Components/**/*.js';
    var componetTemplates = clientFolderRoot + 'Components/**/*.html';
    var examplesSource = clientFolderRoot + 'Examples/**/*.js';

    //server
    var serverFolder = './src/server/';

    //bower
    var bowerFilesPath = './bower_components/';
    var bowerJsonFile = './bower.json';

    var nodeServerPort = 7203;
    var browserSyncPort = 4000;

    var config = {


        /**********************************/
        /**  Files Paths */
        temp: temp,
        clientFolderRoot: clientFolderRoot,

        // source file paths
        allSourceFiles:  [componetsSource, examplesSource],
        componentSourceFiles: [componetsSource],
        examplesSourceFiles : examplesSource,
        componetTemplates: componetTemplates,
        //less config
        less: clientFolderRoot + 'styles/styles.less', 
        compiledLess: temp + 'styles.css',

        //main index.html file
        clientIndexFile: clientFolderRoot + 'index.html',

        browserSyncPort: browserSyncPort,

        ///////////////////////////////////////
        ///  Node Server
        nodeServerPort:nodeServerPort,
        nodeServerOptions: function (isDev) {
            return {
                script: serverFolder + 'app.js',
                delayTime: 2,
                env: {
                    'PORT': nodeServerPort,
                    'NODE_ENV': isDev ? 'dev' : 'build'
                },
                watch: [serverFolder]
            };
        }
    };

    // wiredef config settings
    config.getWiredepDefaultOptions = function(){
        return {
            //location of the bower.json file
            bowerJson: require('./bower.json'),          
            
            //location of bower_components
            directory:  './bower_components/',

            //list of files to ignore wiredep process
            ignorePath: '../..'
        };
    };

    return config;
};

