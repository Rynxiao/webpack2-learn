var path = require('path'),
	webpack = require('webpack'),
	htmlWebpackPlugin = require('html-webpack-plugin'),
	WebpackManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
	entry : {
		main : path.resolve(__dirname, 'js/app.js'),
		vendor : path.resolve(__dirname, 'js/vendor.js')
	},
	output : {
		path : path.resolve(__dirname, 'build-init'),
		filename : '[name].[chunkhash].js',
		chunkFilename : '[name].[chunkhash].js'
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
		new htmlWebpackPlugin({
			title : 'webpack caching'
		}),
		new WebpackManifestPlugin()
	]
}