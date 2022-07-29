// Dependencies
// =============================================================================
const browserSync = require('browser-sync').create();
const compression = require('compression');

browserSync.init({
    files: [
        './dist/**/*.*',
        './docs/**/*.*'
    ],
    ghostMode: {
        clicks: false,
        forms : false,
        scroll: false
    },
    open: false,
    notify: false,
    cors: true,
    reloadDebounce: 1000,
    reloadOnRestart: true,
    server: {
        baseDir: [
            './docs/'
        ],
        middleware: [
            compression()
        ],
        routes: {
            '/CHANGELOG.md': './CHANGELOG.md'
        }
    },
    serveStatic: [
        './dist/'
    ],
    rewriteRules: [
        // Replace CDN URLs with local paths
        {
            match  : /https?.*\/CHANGELOG.md/g,
            replace: '/CHANGELOG.md'
        },
        {
            // CDN paths to local paths
            // Ex1: //cdn.com/package-name/path/file.js => /path/file.js
            // Ex2: http://cdn.com/package-name@1.0.0/dist/file.js => /dist/file.js
            // Ex3: https://cdn.com/package-name@latest/dist/file.js => /dist/file.js
            match  : /(?:https?:)*\/\/.*cdn.*css-device-frames[@\d.latest]*\/(?:dist\/)/g,
            replace: '/'
        }
    ]
});
