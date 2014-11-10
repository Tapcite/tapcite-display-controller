'use strict';

var pkg = require('../package.json');
module.exports = {
    main: {
        nonull: true,
        src: 'dist/tapcite-display-controller.js',
        dest: 'dist/tapcite-display-controller-'+pkg.version+'.js'
    },
    mainmin: {
        nonull: true,
        src: 'dist/tapcite-display-controller.min.js',
        dest: 'dist/tapcite-display-controller-'+pkg.version+'.min.js'
    }
};