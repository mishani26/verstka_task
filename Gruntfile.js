module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            sass: {
                files: 'sass/style.scss',
                tasks: ['sass']
            }
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {                         // Dictionary of files
                    'css/new.css': 'sass/style.scss'       // 'destination': 'source
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['sass']);
    grunt.loadNpmTasks('grunt-contrib-watch')
};