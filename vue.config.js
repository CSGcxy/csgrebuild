
module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        disableHostCheck: true,
        // proxy: 'http://localhost:9001'
        proxy: {
            '/':{
                target: 'http://103.131.169.220:8088',
                changeOrigin: true,
                pathRewrite:{
                    '^/': ''
                }
            }
        }
    }
}
