module.exports = {
    lintOnSave: false, // 关闭格式检查
    productionSourceMap: false, // 打包时不会生成 .map 文件，加快打包速度
    devServer: {
        proxy: {
<<<<<<< HEAD
=======
            open:true,
>>>>>>> 668d6d26fd4df43dd865a8416b549859db01fc40
            '/bgImg': {
                target: 'http://wallpaper.apc.360.cn/index.php',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
<<<<<<< HEAD
                    '^/bgImg': ''
                }
            },
            '/weather': {
                target: 'https://api.openweathermap.org/data/2.5/weather',
                changeOrigin: 'true',
                ws: true,
                pathRewrite: {
                    '^/weather': ''
=======
                    '^/bgImg': '',
>>>>>>> 668d6d26fd4df43dd865a8416b549859db01fc40
                }
            }
        }
     }
}
