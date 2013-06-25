module.exports = function(grunt) {
    grunt.initConfig({
        jasmine : {
            historyhelper : {
                src : 'src/historyhelper.js',
                options : {
                    specs : 'test/historyhelperspec.js'
                }
            }
        }
    });

    // Register tasks.
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // Default task.
    grunt.registerTask('default', 'jasmine');
};