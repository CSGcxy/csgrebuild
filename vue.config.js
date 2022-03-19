
module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        disableHostCheck: true,
        // proxy: 'http://localhost:9001'
        proxy: {
            '/':{
                target: 'http://cxyabc.vaiwan.cn',
                // target: 'http://localhost:9001',
                changeOrigin: true,
                pathRewrite:{
                    '^/': ''
                }
            }
        }
    }
}
