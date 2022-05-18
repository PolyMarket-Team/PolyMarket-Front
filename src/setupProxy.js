const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/users",
        createProxyMiddleware({
            target: "https://api-dev.polymarket.kr",
            changeOrigin: true,
        })
    );
};
