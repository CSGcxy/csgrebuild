
module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        disableHostCheck: true,
        // proxy: 'http://localhost:9001'
        proxy: {
            '/': {
                // target: 'http://csgabc.vaiwan.cn',
                target: 'http://103.131.169.220:8098',
                // target: 'http://localhost:9001',
                // target: 'http://csgabc.ngrok.24k.fun',
                changeOrigin: true,
                pathRewrite: {
                    '^/': ''
                }
            }
        }
    }
}
