var path = require('path');

module.exports = {
    entry: './app/main.ts',
    output: {
        path : __dirname,
        filename: './dist/bundle.js'
    },
    resolve: {
        extensions: [
            '',
            '.js', '.ts', '.scss', '.html',
            '.component.ts',  '.component.scss', '.component.html']
    },
    module: {
        loaders: [
            { test : /\.ts$/  , loader: 'ts-loader', exclude: '/node_modules/' },
            { test : /\.scss$/, loaders: ['raw-loader','sass-loader'] },
            { test : /\.html$/, loader: 'raw', exclude: 'index.html' }
        ],
        noParse: [ path.join(__dirname, 'node_modules', 'angular2', 'bundles') ]
    }
};