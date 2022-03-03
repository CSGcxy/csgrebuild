
module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        disableHostCheck: true,
        // proxy: 'http://localhost:9001'
        proxy: {
            '/':{
                // target: 'http://103.131.169.220:8082',
                target: 'http://localhost:9001',
                changeOrigin: true,
                pathRewrite:{
                    '^/': ''
                }
            }
        }
    }
}
