var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    plugins: [
        new ExtractTextPlugin("style.css"),
        new HtmlWebpackPlugin({
            template: 'index.tpl.ejs',
            title: "Repo Manager",
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    entry: ['babel-polyfill', './main.js'],
    output: {
        path: './dist/',
        filename: 'index.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-2']
            }
        }, {
            test: /\.scss|css$/,
            loader: ExtractTextPlugin.extract('style', 'css?modules!sass!postcss')
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file"
        }],
    },
    postcss: function () {
        return [
            require('autoprefixer')
        ];
    }
}
