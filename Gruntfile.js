module.exports = function(grunt) {
  
  require('jit-grunt')(grunt);
  
  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
      
    sass: {
      build: {
        files: {
          "build/src/css/main.css": "src/sass/main.scss"
        }
      }
    },
      
    concat: {
      options: {
        separator: ";",
      },
      build: {
        src: ['src/js/*.js'],
        dest: "build/src/js/main.js",
      },
      dist: {
        src: ['build/src/js/*.js'],
        dest: "dist/src/js/main.js",
      }
    },
      
    uglify: {
      build: {
        options: {
          mangle: false
        },
        files: {
          "build/src/js/main.js": ['src/js/main.js']
        }
      },
      dist: {
        options: {
          mang: false
        },
        files: {
          "dist/src/js/main.js": ['build/src/js/main.js']
        }
      }
    },
    
    watch: {
      styles: {
        files: ['src/sass/**/*.scss'],
        tasks: ['sass'],
        options: {
          nospawn: true
        }
      }
    },
    
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'build/src/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/src/css',
          ext: '.min.css'
        }]
      }
    }
    
  });
  
  grunt.registerTask('default', ['sass', 'concat', 'uglify', 'watch']);
  grunt.registerTask('build', ['sass', 'concat:build', 'uglify:build']);
  grunt.registerTask('dist', ['sass', 'concat:dist', 'uglify:dist', 'cssmin']);
  
};

//  TODO
//    * add version control management
//    * add version numbering system
//    * add javascript management system
//    * add full build and dist functions for version control