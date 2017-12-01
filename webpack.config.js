module.exports = {
    entry: './src/js/main.js',
    output: {
        path: __dirname + '/build/assets',
        filename: 'prod-main.js',
        publicPath: 'index.html'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
         loaders: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
          }
        ]
    }
 };