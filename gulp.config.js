module.exports = function () {

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
        index: './index.html',
        server: server,
        less: client + 'styles/styles.less',

        defaultPort: 7203,
        nodeServer: './server.js',

     
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'myComponents',
                standalone: true,
                root: 'app/'
            }

        },

        srcTemplates: [
            './src/Components/**/**/**/**/*.html'
        ],
        base: function (file) {
            return file.path.replace(/^.*(\\|\/|\:)/, '');
        },
        standalone: false,
        dest: 'dist',
        destPartials: 'dist/',
        module: 'app'
      
    };

    config.getWiredepDefaultOptions = function () {
                return {
                    bowerJson: config.bower.json,
                    directory: config.bower.directory,
                    ignorePath: config.bower.ignorePath
                };
        };


    return config;

};