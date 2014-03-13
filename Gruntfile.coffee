module.exports = (grunt) ->

	grunt.initConfig
		pkg: grunt.file.readJSON 'package.json'

		connect:
			server: 
				options: 
					port: 8000,
					base: 'src/'

		notify:
			server:
				options:
					title: 'Grunt localhost:<%= connect.server.options.port %>'
					message: 'Local Server is ready!'

		watch:
			html:
				files: [ 'src/*.html', 'src/**/*.html' ]
				options:
					livereload: true
			scripts:
				files: [ 'src/**/*.js' ],
				options:
					livereload: true

	grunt.loadNpmTasks 'grunt-contrib-connect'
	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadNpmTasks 'grunt-notify'

	grunt.registerTask 'default', ['connect', 'watch', 'notify']

