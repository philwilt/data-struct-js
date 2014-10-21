module.exports = (grunt) ->
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.initConfig
    watch:
      coffee:
        files: 'lib/*.coffee'
        tasks: ['coffee:compile']

    coffee:
      compile:
        expand: true,
        flatten: true,
        cwd: "#{__dirname}/lib/",
        src: ['*.coffee'],
        dest: 'js/',
        ext: '.js'
