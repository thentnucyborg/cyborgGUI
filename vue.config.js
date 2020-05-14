module.exports = { 
    publicPath: '/',
    runtimeCompiler: true, 
    devServer: {
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }
};