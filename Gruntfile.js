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

//  TODO
//    * add version control management
//    * add version numbering system
//    * add javascript management system
//    * add full build and dist functions for version control