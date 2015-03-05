var static = require('node-static');
var port = process.env.PORT || 3030;
//
// Create a node-static server instance to serve the './public' folder
//
var file = new static.Server('./');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen( port );