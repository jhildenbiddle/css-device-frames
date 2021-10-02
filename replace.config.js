const pkg = require('./package.json');

const currentYear = (new Date()).getFullYear();
const releaseYear = 2021;

module.exports = {
    from: [
        /@@copyright/g,
        /@@description/g,
        /@@homepage/g,
        /@@license/g,
        /@@version/g
    ],
    to: [
        `(c) ${releaseYear}${currentYear === releaseYear ? '' : '-' + currentYear} ${pkg.author}`,
        pkg.description,
        pkg.homepage,
        `${pkg.license} license`,
        `v${pkg.version}`
    ]
};
