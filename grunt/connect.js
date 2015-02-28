'use strict';

module.exports = {
	server : {
		options : {
			'port'      : 3000,
			'protocol'  : 'http',
			'hostname'  : '*',
			'base'      : './',
			'keepalive' : true,
			'open'      : {
				'target' : 'http://localhost:3000/dev.html',
			}
		}
	}
}
