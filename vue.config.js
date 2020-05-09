const SystemConfig = require('./src/config/system.config')
module.exports = {
    assetsDir: SystemConfig.assetsDir,
    publicPath: SystemConfig.publicPath,
    pages: {
        // viewsSystem: {
        //     entry: '@/entry/viewsSystem/main.js',
        //     template: 'public/index.html',
        //     filename: 'viewsSystem/index.html'
        // },
        manageSystem: {
            entry: './src/entry/manageSystem/main.js',
            template: 'public/index.html',
            filename: 'manageSystem/index.html'
        }
    }
}
