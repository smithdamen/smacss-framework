module.exports = function(grunt) {
  
  require('jit-grunt')(grunt);
  
  grunt.initConfig({
    
    build: {
      
      sass: {
        build: {
          options: {
            style: 'expanded'
          },
          files: {
          'build/src/css/main.css': 'src/sass/main.sass'
          }
        }
      },
      
      cssmin: {
        target: {
          files: {
            src: ['build/src/css/main.css', 'build/src/css/theme.css'],
            dest: 'build/src/css',
            ext: '.min.css'
          }
        }
      },
      
      concat: {
        options: {
          separator: ';',
        },
        build: {
          src: ['src/js/*.js'],
          dest: 'build/src/js/main.js',
        },
      },
      
      uglify: {
        options: {
          mangle: false
        },
        files: {
          'build/src/js/main.js': ['src/js/main.js']
        }
      }
    }
    
  });
  
  grunt.registerTask('default', ['']);
  grunt.registerTask('build', ['sass', 'concat', 'cssmin', 'uglify']);
  
};