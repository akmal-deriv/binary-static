module.exports = function (grunt) {

    global.branch_prefix = 'br_';
    global.branch = grunt.option('branch');
    global.dist = 'dist' + (global.branch ? '/' + global.branch_prefix + global.branch : '');

    global.path = grunt.option('path');

    global.compileCommand = function(params) {
        return 'cd ' + process.cwd() + '/scripts && carton exec perl compile.pl ' + params + (global.branch ? ' -b ' + global.branch : '') + (global.path ? ' -p ' + global.path : '') + ' && cd ..';
    };

    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        configPath: process.cwd() + '/build',
        loadGruntTasks: {
            pattern: 'grunt-*',
            config: require('./package.json'),
            scope: 'devDependencies'
        }
    });

};
