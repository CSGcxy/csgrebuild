
module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        disableHostCheck: true,
        // proxy: 'http://localhost:9001'
        proxy: {
            '/': {
                // target: 'http://csgabc.vaiwan.cn',
                // target: 'http://10.10.15.79:9001',
                target: 'http://223.243.100.141:35772',
                // target: 'http://csgabc.ngrok.24k.fun',
                changeOrigin: true,
                pathRewrite: {
                    '^/': ''
                }
            }
        }
    }
}
