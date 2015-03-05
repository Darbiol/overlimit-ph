var express = require( 'express' ),
	app = express(),
	http = require( 'http' ),
	server = http.createServer( app ),
	port = process.env.PORT || 3030,
	path = require( 'path' ),
	cwd = process.cwd(),
	files = path.join( cwd );

		app.use( express.static( files ) );
	server.listen( port, function(){
		console.log( 'App started. Now Listening to port : '+port );
	} );