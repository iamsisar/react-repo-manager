module.exports = {
	entry : './main.js',
	output : {
		path : './',
		filename : 'index.js',
	},
	devServer:{
		inline: true,
		port: 3333,

	},
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2' , 'react-hmre' ]
                }
            },
            {
                test: /\.scss|css$/,
                loaders: [ 'style', 'css?sourceMap&modules', 'sass?sourceMap' ]
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }

        ],
    }
}