module.exports = function(grunt) {

	// load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

        copy: {
            main: {
                expand: true,
                cwd: 'src/'
            }
        },


		sass: {
            dist: {
                options: {
                    style: 'expanded',
                    noCache: true
                },
                files: [{
                    expand: true,
                    cwd:    "src/css",
                    src:    ["*.scss"],
                    dest:  "src/css",
                    ext:    ".css"
                }]
            }
		},

        watch: {
            options: {
                nospawn: true,
                livereload: true
            },
            sass: {
                files: ['src/css/**/*.scss'],
                tasks: ['sass']
            }
        }
		
	});

	grunt.registerTask('default', ['watch']);
};