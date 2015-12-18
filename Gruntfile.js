'use strict';
module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /*watch - watch the files for modification and trigger the build*/
    watch: {
      options: {
        livereload: true,
      },
      src: {
        files: [
        'src/**/*.*',
        ],
        tasks: ['build']
      },

      gruntfile: {
        files: ['Gruntfile.js']
      }
    },

  /*connect - open server at localhost and liveupdate contents*/
    connect: {
      options: {
        port: 9000,
        hostname: 'localhost',
      },
      livereload: {
        options: {
          open: true,
          base: 'src'
        }
      }
    },

  /*copy - copy files to deploy folder*/
    copy: {
        deploy: {
            files: [
          {expand: true,flatten: true, src: ['temp/**/*.js'], dest: 'deploy/js/', filter: 'isFile'},
          {expand: true,flatten: true, src: ['temp/**/*.css'], dest: 'deploy/css/', filter: 'isFile'},
          {expand: true,flatten: true, src: ['src/index.html'], dest: 'deploy/', filter: 'isFile'},
          {expand: true,flatten: true, src: ['src/assets/fonts/*'], dest: 'deploy/fonts/', filter: 'isFile'},
          {expand: true,flatten: true, src: ['src/assets/images/*'], dest: 'deploy/images/', filter: 'isFile'}
        ]
      }
    },

    /*clean - clean the deploy directory*/
    clean: {
      deploy: {
        src: [ 'deploy']
      },
      temp: {
        src: [ 'temp']
      }
    },

    /*concat - concat all js/css files into single file*/
    concat: {
      options: {
        separator: ';'
      },
      appjs: {
        src: ['src/**/*.js'],
        dest: 'temp/js/app.js'
      },
      appcss: {
        src: ['src/**/*.css'],
        dest: 'temp/css/app.css'
      },

      bowercss: {
        src: ['bower_components/**/*.css'],
        dest: 'temp/css/bower.css'
      },
    },

    /*bower_concat - concat all js files inside bower_components directory*/
    bower_concat: {
      all: {
        dest: 'src/temp/js/bower.js',
      }
    },

    /*ngtemplates - put all html files into templateCache and generate as single js file*/
    ngtemplates: {
      options: {
        base: "temp",
        module: "demoapp",
      },
      app:        {
        src:      'src/**/*.html',
        dest:     'src/temp/js/templates.js'
      }
    },
    //
    cssmin: {
      options: {
        expand: true,
        rebase: false
      },
      dist: {
        files: {
          'temp/css/bower.min.css': ['temp/css/bower.css'],
          'temp/css/app.min.css': ['temp/css/app.css']
        }
      }
    },
    uglify: {
      options:{
        mangle   : false
      },
      target: {
        files: {
          'temp/js/bower.min.js': ['temp/js/bower.js'],
          'temp/js/app.min.js': ['temp/js/app.js'],
          'temp/js/templates.min.js': ['temp/js/templates.js']
        }
      }
    }


 });   

grunt.registerTask('build', [
  'clean',
  'bower_concat',
  'ngtemplates',
/*  'concat',
  
  'ngtemplates',
  'cssmin',
  'uglify',
  'copy',
  'clean:temp'
*/  ]);

grunt.registerTask('default', [
  'build',
  'connect',
  'watch'
  ]);

};