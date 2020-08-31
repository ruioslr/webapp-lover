const path = require('path');
const webpack = require('webpack');

const HtmlPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/index'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.[hash].js'
    },
    resolve: {
        extensions: [".js", ".json", '.jsx', '.ts', '.tsx'],
        alias: {
            'components': path.resolve(__dirname, '../src/components'),
            'pages': path.resolve(__dirname, '../src/pages'),
            'src': path.resolve(__dirname, '../src'),
        }
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",

                }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }, {
                    loader: "less-loader",
                    options: {
                        lessOptions: {
                            javascriptEnabled: true
                        }
                    }
                }]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            template: path.resolve(__dirname, '../src/index.ejs' ),
            BUILD_TIME: new Date().toLocaleString()
        }),
        new CopyWebpackPlugin({patterns: [{
            from: path.resolve(__dirname, '../src/adjust-rem.js'),
            to: path.resolve(__dirname, '../dist'),
        }]}),
    ]

};
