module.exports = {
    entry: './src/index.js',
    output: {
        path: require('path').resolve(__dirname, 'build'),
        filename:'bundle.js',
    },
    module: {
        rules : [
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe|jpg|png|woff|woff2|eot|ttf|svg)(\?.*$|$)/i,
                use: [
                  {
                    loader: 'file-loader',
                  }
                ],
            },
        ]
    }
}