module.exports = function (grunt) {

    grunt.initConfig({
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
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: 'src/'
                }
            }
        },

        watch: {
            project: {
                files: ['src/**/*.js', 'src/**/*.html', 'src/**/*.json', 'src/**/*.css'],
                options: {
                    livereload: true
                }
            },
            sass: {
                files: ['src/css/**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['connect', 'watch']);

};
