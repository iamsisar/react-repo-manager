module.exports = {
    entry: ['babel-polyfill', './main.js'],
    output: {
        path: './',
        filename: 'index.js',
    },
    devServer: {
        inline: true,
        port: 3333,
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: "eslint-loader",
            exclude: /node_modules/
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-2', 'react-hmre']
            }
        }, {
            test: /\.scss|css$/,
            loaders: ['style', 'css?sourceMap&modules', 'postcss?sourceMap', 'sass?sourceMap']
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }],
    },
    postcss: function() {
        return [
            require('autoprefixer')
        ];
    }
}