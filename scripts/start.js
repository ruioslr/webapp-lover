const path = require('path');

const webpack = require('webpack');
const config = require('./webpack.config');
const DevServer = require('webpack-dev-server');

const serverOption = {
    contentBase: path.resolve(__dirname, "../dist"),
    compress: true,
    open: true,
    hot: true,
    stats: 'minimal',
};


const compiler = webpack(config);
const server = new DevServer(compiler, serverOption);

server.listen(9000, () => {
    console.log(`正在监听${serverOption}`)
})




