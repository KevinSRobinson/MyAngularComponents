
var express = require('express');
var app = express();
var errorHandler = require('./routes/utils/errorHandler')();
app.use(errorHandler.init);
app.use('/*', express.static('./dist/index.html'));

app.listen(7203, function() {
    console.log('Express server listening on port ' + 7203);
    console.log('env = ' + app.get('env') +
                '\n__dirname = ' + __dirname +
                '\nprocess.cwd = ' + process.cwd());
});

