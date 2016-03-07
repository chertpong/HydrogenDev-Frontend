var path = require('path');
var HtmlWebpackPlugin  = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    devtool: "source-map",
    debug: true,
    entry: {
        app: path.resolve(__dirname, 'app/main.ts'),
        dependencies: path.resolve(__dirname, 'app/dependencies.ts')
    },
    output: {
        path : __dirname,
        filename: './dist/[name].bundle.js',
        sourceMapFilename: '[name].map'
    },
    resolve: {
        extensions: [
            '',
            '.js', '.ts', '.css', '.scss', '.html',
            '.component.ts',  '.component.scss', '.component.html']
    },
    module: {
        loaders: [
            { test : /\.ts$/  , loader: 'ts-loader', exclude: '/node_modules/' },
            { test : /\.css$/, loader:   ExtractTextPlugin.extract('style-loader', 'css-loader')},
            { test : /\.scss$/, loaders: ['raw-loader','sass-loader'] },
            { test : /\.html$/, loader: 'raw', exclude: 'index.html' },
            { test : /\.(eot|woff|woff2|ttf|svg|png|jpg)$/, loader: require.resolve("url-loader") + '?name=[name]-[hash].[ext]' }
        ],
        noParse: [ path.join(__dirname, 'node_modules', 'angular2', 'bundles') ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            inject: true
        })
    ]
};