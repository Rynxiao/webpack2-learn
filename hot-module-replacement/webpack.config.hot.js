var path = require('path'),
	webpack = require('webpack');

module.exports = {
	entry : [ 
		path.resolve(__dirname, 'js/app.js'), 
		"webpack-dev-server/client?http://127.0.0.1:8080/",
		"webpack/hot/dev-server"
	],
	output : {
		path : path.resolve(__dirname, 'build'),
		filename : '[name].bundle.js',
		publicPath : '/build/'
	},
	module : {
		rules : [
			{ 
				test : /\.(js|jsx)$/, 
				loader : 'babel-loader'
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
	plugins : [
		new webpack.HotModuleReplacementPlugin()
	],
	node : {
		fs : "empty",
		module : "empty",
		net : "empty"
	},
	// devServer : {
	// 	contentBase : path.join(__dirname, 'build'),
	// 	compress : true,
	// 	port : 9000
	// }
}