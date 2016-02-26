'use strict';

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

    var PATHS = {
        src: {
            base: 'src',
            app: 'src/app',
            config: 'src/app/config',
            less: 'src/less'
        },

        public: {
            base: 'src/public',
            css: 'src/public/assets/css',
            js: 'src/public/assets/js',
            assets: 'src/public/assets',
            fonts: 'src/public/assets/fonts',
        },

        // dist: {
        //     base: 'dist',
        //     css: 'dist/css',
        //     fonts: 'dist/fonts',
        //     js: 'dist/js'
        // }
    };

    grunt.initConfig({

        // Configurable paths
        path: PATHS,

        // Package settings
        pkg: grunt.file.readJSON('package.json'),

        browserify: {
            js: {
                src: ['<%= path.src.app %>/bootstrap.js'],
                dest: '<%= path.public.js %>/<%= pkg.name %>.js'
            }
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['<%= path.src.app %>/**/**/{,*/}*.js'],
                tasks: ['js']
            },

            less: {
                files: ['<%= path.src.less %>/**/{,*/}*.less'],
                tasks: ['css']
            },

            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },

                files: ['<%= path.public.base %>/**/{,*/}*.{js,css,html,png,jpg,jpeg,gif,webp,svg}']
            }
        },

        connect: {
            options: {
                port: 9000,
                hostname: 'localhost',
                livereload: 35729,
                protocol: 'http'
            },

            livereload: {
                options: {
                    open: false,
                    middleware: function (connect) {
                        var middlewares = [
                            proxySnippet,
                            connect.static('./src/public')
                        ];

                        return middlewares;
                    }
                }
            }
        },

        // Compile less
        less: {
          dist: {
            files: {
              '<%= path.public.css %>/<%= pkg.name %>.css': '<%= path.src.less %>/main.less'
            }
          }
        },

        autoprefixer: {
            dist: {
                src: '<%= path.public.css %>/<%= pkg.name %>.css',
                dest: '<%= path.public.css %>/<%= pkg.name %>.css'
            }
        },

        cssmin: {
            dist: {
                files: {
                    '<%= path.public.css %>/<%= pkg.name %>.min.css': '<%= path.public.css %>/<%= pkg.name %>.css'
                }
            }
        },

        copy: {
            dev: {
                files: [
                    // flattens results to a single level
                    {expand: true, flatten: true, src: ['./node_modules/font-awesome/fonts/*'], dest: '<%= path.public.fonts %>/', filter: 'isFile'}
                ],
            },
        },

        // Test settings
        karma: {
          unit: {
            configFile: 'test/karma.conf.js',
            singleRun: true
          }
        }
    });

    // The default tasks to run when you type: grunt
    grunt.registerTask('default', ['build']);

    grunt.registerTask('test', ['karma']);
    grunt.registerTask('build', ['copy:dev', 'css', 'js']);

    grunt.registerTask('js', ['browserify']);

    grunt.registerTask('css', [
        'less',
        'autoprefixer',
        'cssmin'
    ]);

    grunt.registerTask('server', [
        'build',
        'connect:livereload',
        'configureProxies:server',
        'watch'
    ]);
};
