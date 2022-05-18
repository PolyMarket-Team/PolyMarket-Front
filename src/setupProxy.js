const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    console.log("proxy running!");
    app.use(
        "/users",
        createProxyMiddleware({
            target: "https://api-dev.polymarket.kr",
            changeOrigin: true,
        })
    );
};
