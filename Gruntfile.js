module.exports = function (grunt){
    grunt.initConfig({
        uglify: {
            suma: {
                src:'js/suma.js',
                dest: 'uglify/suma.min.js'
            },
            resta: {
                src: 'js/resta.js',
                dest: 'uglify/resta.min.js'
            },
            dist: {
                src: 'js/*.js',
                dest: 'uglify/operaciones.min.js'
            }
        },
        concat: {
            two: {
                src: ['js/resta.js', 'js/suma.js'],
                dest: 'concat/sumaresta.js'
            },
            three: {
                src: ['js/resta.js', 'js/suma.js', 'js/division.js'],
                dest: 'concat/sumarestadivision.js'
            }
        },
        log: {
            foo: [1, 2, 3],
            bar: 'hello world',
            baz: false
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');


    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('sumaresta', ['uglify:suma', 'uglify:resta']);
    grunt.registerTask('dist', ['uglify:dist']);

    grunt.registerTask('concatTwo', ['concat:two']);

    grunt.registerTask('concatAnduglify', ['concat', 'uglify']);

    grunt.registerMultiTask('log', 'Log stuff.', function() {
                            grunt.log.writeln(this.target + ': ' + this.data);
    });

    
}