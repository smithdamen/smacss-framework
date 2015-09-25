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
    },
      
    uglify: {
      options: {
        mangle: false
      },
      files: {
        "build/src/js/main.js": ['src/js/main.js']
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
    }
    
  });
  
  grunt.registerTask('default', ['sass', 'concat', 'uglify', 'watch']);
  grunt.registerTask('build', ['sass', 'concat', 'uglify']);
  
};