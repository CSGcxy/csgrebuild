
module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        disableHostCheck: true,
        // proxy: 'http://localhost:9001'
        proxy: {
            '/':{
                // target: 'http://csgabc.vaiwan.cn',
                // target: 'http://localhost:9001',
                target: 'http://csgabc.ngrok.24k.fun',
                changeOrigin: true,
                pathRewrite:{
                    '^/': ''
                }
            }
        }
    }
}
