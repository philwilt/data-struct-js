module.exports = (grunt) ->
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-mocha-test')

  grunt.initConfig
    watch:
      coffee:
        files: ['lib/*.coffee', 'test/*.coffee']
        tasks: ['coffee:compile', 'mochaTest:test']
      test:
        files: 'js/**/*_spec.js'
        tasks: ['mochaTest:test']

    coffee:
      compile:
        expand: true,
        flatten: true,
        cwd: "#{__dirname}/",
        src: ['lib/*.coffee', 'test/*.coffee'],
        dest: 'js/',
        ext: '.js'

    mochaTest:
      test:
        options:
          reporter: 'spec',
          quiet: false,
          # require: 'coverage/blanket'
        src: ['js/**/*_spec.js']

      coverage:
          options:
            reporter: 'html-cov',
            quiet: true,
            captureFile: 'coverage.html'
          src: ['js/**/*_spec.js']

    grunt.registerTask('default', ['coffee','mochaTest'])
