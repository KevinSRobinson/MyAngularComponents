module.exports = function() {

    var client = './src/';
    var clientApp = client + 'app/';
    var temp = './.tmp/';
    var server = './src/server/';

    var config = {

        temp: temp,
        client: client,
        //all js to vet
        alljs: [
            './src/Components/**/**/**/*.js'
        ],
        index: './src/index.html',
        server: server,
        less: './less/less/bootstrap.less',

        defaultPort: 7203,
        nodeServer: './server.js',

        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
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
                standalone: true,
                root: 'app/'
            }
        },
        examplesTemplateCache: {
            file: 'exampleTemplates.js',
            options: {
                module: 'examples',
                standalone: true,
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
        module: 'app'

    };

    config.getWiredepDefaultOptions = function() {
        return {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
    };


    return config;

};