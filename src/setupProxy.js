const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
	app.use(
		'/main',
		createProxyMiddleware({
			target: 'http://munji-back:8080',
			changeOrigin: true,
		})
	);
	app.use(
		'/map',
		createProxyMiddleware({
			target: 'http://munji-back:8080',
			changeOrigin: true,
		})
	);
	app.use(
		'/main/search',
		createProxyMiddleware({
			target: 'http://munji-back:8080',
			changeOrigin: true,
		})
	);
}