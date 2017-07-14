var path = require('path');

module.exports = {
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
		modules : [ path.resolve(__dirname, "js"), "node_modules" ]
	}
};