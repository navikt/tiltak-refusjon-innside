const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app, apiHostname, decoratorHostName) {
    app.use('/api', createProxyMiddleware({ target: 'http://localhost:8080', changeOrigin: true }));
    app.use(
        '/modiacontextholder/api/decorator',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            pathRewrite: () => '/api/innlogget-bruker',
            changeOrigin: true,
        })
    );
    app.use('/internarbeidsflatedecorator', (req, res) => {
        res.redirect('https://navikt.github.io' + req.originalUrl);
    });
};
