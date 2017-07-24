const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: './src/App.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'bin'),
        // publicPath: '/bin/',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015','react']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false //压缩时是否显示告警信息
            },
            output: {
                comments: false //压缩后的文件是否有注释
            }
        })
    ]
};