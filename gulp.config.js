module.exports = function() {

    var client = './src/';
    var clientApp = client + 'app/';
    var temp = './.tmp/';
    var server = './src/server/';
    var root = './';

    var config = {
        root: root,  
         packages: [        './package.json',
            './bower.json'
        
        ],          
        temp: temp,
        client: client,


        //all js to vet
        sourceFiles: [
            './src/Components/**/*.js',
            './src/Examples/**/*.js'
        ],
        index: './src/index.html',
        server: server,
        less: './less/less/bootstrap.less',

        defaultPort: 7203,
         nodeServer: server + 'app.js',

        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
        },
        npm: {
            json: require('./package.json'),
            directory: './node_modules/',
            ignorePath: '../..'
        },
        
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'myComponents',
                standalone: false,
                root: 'app/'
            }
        },
        browsersyncPort:5454, 
        examplesTemplateCache: {
            file: 'exampleTemplates.js',
            options: {
                module: 'examples',
                standalone: false,
                root: 'app/'
            }
        },
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*spec.js',
            '!' + './bower_components/**'
        ],
        examples: [
            clientApp + 'Examples/**/*.*'
        ],
        srcExampleTemplates: [
            './src/Examples/Components/**/*.html'
        ],
        srcTemplates: [
            './src/Components/**/*.html'
        ],

        base: function(file) {
            return file.path.replace(/^.*(\\|\/|\:)/, '');
        },
        standalone: false,
        dest: 'dist',
        destPartials: 'dist/',
        module: 'app',

        optimized : {
            lib : 'lib.js',
            app : 'app.js',
            examples: 'examples.js'
        }
    };

    config.getWiredepDefaultOptions = function() {
        return {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: '**.**',
            
        };
    };


    return config;

};