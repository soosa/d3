module.exports = {
    entry: './src/js/main.js',
    output: {
        path: './build',
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
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
          }
        ]
    }
 };