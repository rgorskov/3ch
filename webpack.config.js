const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
    const isDev = options.mode == 'development';
    const isProd = (options.mode = 'production');

    return {
        context: path.resolve(__dirname, 'src'),
        devtool: 'source-map',
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isDev ? 'bundle.js' : 'bundle.[contenthash].js',
            clean: true,
        },
        devServer: {
            contentBase: path.resolve(__dirname, 'dist'),
            port: 3000,
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html',
                minify: {
                    collapseWhitespace: isProd,
                },
            }),
        ],
    };
};
