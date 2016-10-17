var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var WebpackStripLoader = require('strip-loader');

module.exports = {
    entry: ['babel-polyfill', './main.js'],
    output: {
        path: './dist/',
        filename: 'index.js',
    },
    devServer: {
        inline: true,
        port: 3333,
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-2']
            }
        }, {
            test: /\.css|scss$/,
            loader: ExtractTextPlugin.extract('css?sourceMap&modules'),
            exclude: /node_modules|lib/
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }, {
            test: [/\.js$/],
            exclude: /node_modules/,
            loader: WebpackStripLoader.loader('console.log')
        }],
    },
    plugins: [
        new ExtractTextPlugin("style.css", {
            allChunks: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    postcss: function() {
        return [
            require('autoprefixer')
        ];
    }
}