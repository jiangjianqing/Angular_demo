'use strict';
//包装函数
module.exports=function(grunt){
	// Configurable paths for the application
	var appConfig = {
		app: require('./bower.json').appPath || 'app',
		dist: 'dist'
	};
	//任务配置，所有插件的配置信息
	grunt.initConfig({

		// Project settings
    	yeoman: appConfig,

		//获取package.json的信息
		pkg:grunt.file.readJSON('package.json'),
		
		requirejs: {
		    compile: {
		        options: {
		            name: "require-config",
		            baseUrl: "app/",
		            mainConfigFile: "app/require-config.js",
		            out: "dist/app/require-config.js"
		        }
		    }
		},
		//jshint语法检查配置
		jshint:{
			build:['Gruntfile.js','<%= yeoman.app %>/*.js'],
			options:{
				jshintrc:'.jshintrc'
			}
		},		
		bower: {   
		    install: { 
		        options: {
		                "targetDir": "<%= yeoman.dist %>/lib",
		                "layout": "byComponent",
		                "install": true,
		                "verbose": false,
		                "cleanTargetDir": false
		              }
		          }
	    },
	    // Empties folders to start fresh
	    clean: {
	      dist: {
	        files: [{
	          dot: true,
	          src: [
	            '.tmp',
	            '<%= yeoman.dist %>/{,*/}*',
	            '!<%= yeoman.dist %>/.git{,*/}*'
	          ]
	        }]
	      },
	      server: '.tmp'
	    },	    
	    // Copies remaining files to places other tasks can use
	    copy: {
	      dist: {
	        files: [{
	          expand: true,
	          dot: true,
	          cwd: '<%= yeoman.app %>',
	          dest: '<%= yeoman.dist %>',
	          src: [
	            '*.{ico,png,txt}',
	            '.htaccess',
	            '*.js',
	            '*.html',
	            'images/{,*/}*.{webp}',
	            'styles/fonts/{,*/}*.*'
	          ]
	        }, {
	          expand: true,
	          cwd: '.tmp/images',
	          dest: '<%= yeoman.dist %>/images',
	          src: ['generated/*']
	        },{
	          expand: true,
	          cwd: 'bower_components/bootstrap/dist',
	          src: 'fonts/*',
	          dest: '<%= yeoman.dist %>'
	        }]
	      },
	      styles: {
	        expand: true,
	        cwd: '<%= yeoman.app %>/styles',
	        dest: '<%= yeoman.dist %>/styles/',
	        src: '{,*/}*.css'
	      },
	      scripts:{
	      	expand: true,
	        cwd: '<%= yeoman.app %>/scripts',
	        dest: '<%= yeoman.dist %>/scripts/',
	        src: '{,*/}*.js'
	      },
	      views:{
	      	expand: true,
	        cwd: '<%= yeoman.app %>/views',
	        dest: '<%= yeoman.dist %>/views/',
	        src: '{,*/}*.*'
	      }
	    },	    
	    targethtml: {
		    dist: {
		        src: 'app/index.html',
		        dest: 'dist/index.html'
		    }
		},		
		usemin: {
		  js: 'dist/require-config.js',
		  options: {
		    assetsDirs: 'images',
		    patterns: {
		      js: [
		        [/(image\.png)/, 'Replacing reference to image.png']
		      ]
		    }
		  }
		},
		replace: {
	      dist: {
	        options: {
	          patterns: [
	            {
	              match: /bower_components/g,
	              replacement: 'lib'
	            }
	          ]
	        },
	        files: [
	          {expand: true, flatten: true, src: ['app/require-config.js'], dest: 'dist/'}
	        ]
	      }
	    },
		watch:{
			scripts: {
                files: ['src/*.js'],
                tasks: ['jshint']
            }
		}
	});

	//grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	//grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-targethtml");
	grunt.loadNpmTasks("grunt-replace");


	grunt.registerTask('default',['jshint']);
	grunt.registerTask('build',['jshint','clean','bower','copy','targethtml','replace']);
};