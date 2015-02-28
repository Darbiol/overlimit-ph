module.exports = {

    scripts : {
        files: [
            'src/scripts/*.js'
        ],
        tasks: [
            'jshint',
            'uglify'
        ],
        options : {
	        spawn: false,
	        livereload: true
	    }
    },

    styles : {
        files: [
            'src/styles/*.scss'
        ],
        tasks: [
            'sass:dev'
        ],
        options : {
	        spawn: false,
	        livereload: true
	    }
    },

    html : {
    	files: [
    		'dev.html'
    	],
    	 tasks: [
            'sass:dev'
        ],
        options : {
	        spawn: false,
	        livereload: true
	    }
    }
};