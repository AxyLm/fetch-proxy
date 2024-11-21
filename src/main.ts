import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(
    "/bn",
    createProxyMiddleware({
        target: "https://www.binance.com/",
        changeOrigin: true,
        pathRewrite: { "^/bn": "" },
    })
);

app.listen(PORT, () => {
    console.log(`Server start: http://localhost:${PORT}`);
});
