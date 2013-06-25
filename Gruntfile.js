/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    meta: {
      version: '0.1.0'
    },
    banner: '/*! PROJECT_NAME - v<%= meta.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '* http://PROJECT_WEBSITE/\n' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
      'YOUR_NAME; Licensed MIT */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['src/js/libs/encodeHtml.js','src/js/libs/zepto.min.js','src/js/libs/underscore-min.js','src/js/mtop/mtop_1.0.0dev.js','src/js/libs/lazyload.js', 'src/js/detail/detailall.js'],
        dest: 'build/js/detailall.js'
      }
    },

    concatPc:{
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['src/js/libs/underscore-min.js','src/js/pclanding/mtop_1.0.0dev_pc.js','src/js/pclanding/pclanding.js'],
        dest: 'build/js/contactPc.js'
      }
    },
    
      depconcat: {
          options: {
          },
          dist: {
              src: ['test/*.js'],
              dest: 'build/testall.js'
          },
          html: {
              options:{
                ext: '.html',
                requireTemplate: '\\/\\/@include (\\w+)'
              },
              src: ['test/*.html'],
              dest: 'build/testall.html'
          }
      },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/FILE_NAME.min.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    nodeunit: {
      files: ['test/**/*_test.js']
    },
    watch: {
//      gruntfile: {
//        files: '<%= jshint.gruntfile.src %>',
//        tasks: ['jshint:gruntfile']
//      },
//      lib_test: {
//        files: '<%= jshint.lib_test.src %>',
//        tasks: ['jshint:lib_test', 'nodeunit']
//      }
      detail: {
          files: ['<%= concat.dist.src%>'],
          tasks: ['concat']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-depconcat');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-nodeunit');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  //grunt.registerTask('default', ['jshint', 'nodeunit', 'concat', 'uglify']);

};
