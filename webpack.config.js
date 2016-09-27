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
                    presets: ['react', 'es2015', 'react-hmre' ]
                }
            },
            {
                test: /\.scss|css$/,
                loaders: [ 'style', 'css?sourceMap&modules', 'sass?sourceMap' ]
            }

        ],
    }
}