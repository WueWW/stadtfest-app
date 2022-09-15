const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const serviceWorkerConfig = require('./webpack.config.service-worker');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: 'public/assets',
                to: 'assets',
            },
            {
                from: 'public/programm-2022.json',
                to: 'programm-2022.json',
            },
        ]),
        serviceWorkerConfig(true),
    ],
});
