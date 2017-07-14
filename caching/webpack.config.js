var path = require('path'),
	webpack = require('webpack'),
	htmlWebpackPlugin = require('html-webpack-plugin'),
	ChunkManifestWebpackPlugin = require('chunk-manifest-webpack-plugin'),
	WebpackChunkHash = require('webpack-chunk-hash');

module.exports = {
	entry : {
		main : path.resolve(__dirname, 'js/app.js'),
		vendor : path.resolve(__dirname, 'js/vendor.js')
	},
	output : {
		path : path.resolve(__dirname, 'build'),
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
		new webpack.optimize.CommonsChunkPlugin({
			name : ['vendor', 'manifest'],
			minChunks : Infinity
		}),
		new webpack.HashedModuleIdsPlugin(),
		new WebpackChunkHash(),
		new htmlWebpackPlugin({
			title : 'webpack caching'
		}),
		new ChunkManifestWebpackPlugin({
			filename : 'chunk-mainfest.json',
			manifestVariable : 'webpackManifest',
			inlineManifest : true
		})
	]
}