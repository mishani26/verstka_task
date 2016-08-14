module.exports = function(grunt) {
    grunt.initConfig({
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {                         // Dictionary of files
                    'css/style.css': 'sass/style.scss'       // 'destination': 'source
                }
            }
        },
        sprite:{
          all: {
            src: 'images/*.png',
            dest: 'images/spritesheet.png',
            destCss: 'css/sprites.css'
        }
    }
});
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['sass']);
};