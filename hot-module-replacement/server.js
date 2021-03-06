const Webpack = require("webpack");
const WebpackDevServer = require("../node_modules/webpack-dev-server/lib/Server");
const webpackConfig = require("./webpack.config");

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
	hot : true,
	filename : webpackConfig.output.filename,
	publicPath : webpackConfig.output.publicPath,
	stats : {
		colors : true
	}
});

server.listen(8080, '127.0.0.1', function() {
	console.log("Starting server on http://localhost:8080");
});