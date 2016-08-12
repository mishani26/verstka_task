module.exports = function(grunt){
	grunt.initConfig({
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'style.css': 'style.scss'
				}
			}
		},
		watch:{
			options:{
				livereload:true
			},
			scripts:{
				files:['верстка/*.scss'],
				tasks:['newer:sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-newer");
}