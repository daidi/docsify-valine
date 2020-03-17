// rollup.config.js
import {terser} from "rollup-plugin-terser";
import pkg from './package.json';

const toCamelCaseName = (name) => name.split('-')
    .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
    .join('');

// Copyright
const currentYear = (new Date()).getFullYear();
const releaseYear = 2019;

// Banner
const bannerData = [
    `${pkg.name}`,
    `v${pkg.version}`,
    `${pkg.homepage}`,
    `(c) ${releaseYear}${currentYear === releaseYear ? '' : '-' + currentYear} ${pkg.author}`,
    `${pkg.license} license`
];

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/docsify-valine.min.js',
        format: 'cjs',
        banner: `/*!\n * ${bannerData.join('\n * ')}\n */`,
        sourcemap: true
    },

    plugins: [
        (process.env.NODE_ENV === 'production' && terser()),
    ],
};