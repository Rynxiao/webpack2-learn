var path = require('path'),
	webpack = require('webpack');

module.exports = function(env) {
	return {
		entry : path.resolve(__dirname, 'js/app.js'),
		output : {
			path : path.resolve(__dirname, 'build'),
			filename : '[name].bundle.js'
		},
		module : {
			rules : [
				{ 
					test : /\.js|\.jsx$/, 
					loader : 'babel-loader', 
					options : {
						presets : ["es2015", "react"]
					} 
				},
				{ 
					test : /\.css$/,
					use : ['style-loader', 'css-loader']
				},
				{
					test : /\.less$/,
					use : ['style-loader', 'css-loader', 'less-loader']
				}
			]
		},
		resolve : {
			alias : {
				jquery : 'jquery/src/jquery',
				alias : path.resolve(__dirname, 'alias')
			}
		},
		plugins : [
			new webpack.ProvidePlugin({
				$ : 'jquery',
				jQuery : 'jquery'
			})
		]
	};
}