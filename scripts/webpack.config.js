const path = require('path');
const webpack = require('webpack');

const HtmlPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/index'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: [".js", ".json", '.jsx', '.ts', '.tsx'],
        alias: {
            '@rc': path.resolve(__dirname, '../RC'),
            '@antd': path.resolve(__dirname, '../Antd')
        }
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js(x)*$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // plugins:[['import', {
                        //     "libraryName": "antd",
                        //     "style": true,   // or 'css'
                        // }]],
                        presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader",
                    options: {
                        lessOptions: {
                            javascriptEnabled: true
                        }
                    }
                }]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            template: path.resolve(__dirname, '../src/index.html' )
        })
    ]

};
