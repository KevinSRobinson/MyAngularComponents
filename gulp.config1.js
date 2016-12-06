module.exports = function(){

    //temp location for compiled css
    var temp = './.tmp';
    var client = './src/';


    var config = {


        /**********************************/
        /**  Files Paths */
        temp: temp,

        // source file paths
        alljs: [ './src/**/*.js',
                 './*.*.js'],

        //less config
        less: client + 'styles/styles.less', 
        compiledLess: temp + '**.css'



    };

    return config;
};

