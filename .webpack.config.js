module.exports = {
    devServer: {        
        contentBase: path.join(__dirname, "dist"),
        publicPath: "/",
        host: "dev.domain.com",
        overlay: true,
        port: 8081,
        stats: "errors-only",
        historyApiFallback: true,
        before: (app, server, compiler) => {
            app.get("/api/keywords", (req, res) => {
              res.json([
                { keyword: "이탈리아" },
                { keyword: "세프의요리" },
                { keyword: "제철" },
                { keyword: "홈파티" },
              ])
            })
        }
    }
}