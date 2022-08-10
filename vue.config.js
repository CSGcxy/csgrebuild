
module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        disableHostCheck: true,
        // proxy: 'http://localhost:9001'
        proxy: {
            '/': {
                // target: 'http://csgabc.vaiwan.com',
                // target: 'http://localhost:9001',
                target: 'http://testcsg.ngrok.24k.fun',
                // target: 'http://csgabc.ngrok.24k.fun',
                changeOrigin: true,
                pathRewrite: {
                    '^/': ''
                }
            }
        }
    }
}
